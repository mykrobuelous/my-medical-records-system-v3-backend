import { Request, Response } from 'express';
import { db } from '../../db/db';
import { consultations, insurances, patients } from '../../db/schema';
import { desc, eq, isNull } from 'drizzle-orm';
import { consultationSchema } from './consultationSchema';

export const getConsultations = async (req: Request, res: Response) => {
    try {
        const consultationsData = await db
            .select({
                consultation: consultations,
                patient: patients,
            })
            .from(consultations)
            .innerJoin(patients, eq(consultations.patientId, patients.id))
            .orderBy(desc(consultations.createdAt));

        res.status(200).json(consultationsData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching consultations', error });
    }
};
export const getConsultationsByPatientId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const consultationsData = await db
            .select()
            .from(consultations)
            .where(eq(consultations.patientId, id as string));

        res.status(200).json(consultationsData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching consultations', error });
    }
};
export const getConsultationByInsuranceId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const insuranceData =
            id !== 'none'
                ? await db
                      .select()
                      .from(insurances)
                      .where(eq(insurances.id, id as string))
                : [{ id: null, name: 'None' }];

        if (!insuranceData.length) {
            return res.status(404).json({ message: 'Insurance not found' });
        }

        const consultationsData =
            id === 'none'
                ? await db
                      .select({ consultation: consultations, patient: patients })
                      .from(consultations)
                      .innerJoin(patients, eq(consultations.patientId, patients.id))
                      .orderBy(desc(consultations.createdAt))
                      .where(isNull(consultations.insuranceId))
                : await db
                      .select({ consultation: consultations, patient: patients })
                      .from(consultations)
                      .innerJoin(patients, eq(consultations.patientId, patients.id))
                      .orderBy(desc(consultations.createdAt))
                      .where(eq(consultations.insuranceId, id as string));

        res.status(200).json({ consultations: consultationsData, insurances: insuranceData[0] });
    } catch (error) {
        console.error('Error fetching consultations by insurance ID:', error);
        res.status(500).json({ message: 'Error fetching consultations', error });
    }
};

export const getConsultationById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const consultData = await db
            .select({
                consultation: consultations,
                patient: patients,
            })
            .from(consultations)
            .where(eq(consultations.id, id as string))
            .innerJoin(patients, eq(consultations.patientId, patients.id));
        if (!consultData.length) {
            return res.status(404).json({ message: 'Consultation not found' });
        }
        res.status(200).json(consultData[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching consultation', error });
    }
};

export const createConsultation = async (req: Request, res: Response) => {
    const result = consultationSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid consultation data' });
    }

    try {
        const newConsultation = await db.insert(consultations).values(result.data).returning();

        res.status(201).json(newConsultation);
    } catch (error) {
        console.error('Error creating consultation:', error);
        res.status(500).json({ message: 'Error creating consultation', error });
    }
};

export const updateConsultation = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = consultationSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid consultation data' });
    }
    console.log(result);
    try {
        const updatedConsultation = await db
            .update(consultations)
            .set({
                ...result.data,
                insuranceId: result.data.insuranceId === '' ? null : result.data.insuranceId,
            })
            .where(eq(consultations.id, id as string))
            .returning();
        if (!updatedConsultation.length) {
            return res.status(404).json({ message: 'Consultation not found' });
        }
        res.status(200).json(updatedConsultation[0]);
    } catch (error) {
        // console.error('Error updating consultation:', error);
        res.status(500).json({ message: 'Error updating consultation', error });
    }
};

export const deleteConsultation = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedConsultation = await db
            .delete(consultations)
            .where(eq(consultations.id, id as string))
            .returning();

        if (!deletedConsultation.length) {
            return res.status(404).json({ message: 'Consultation not found' });
        }
        res.status(200).json(deletedConsultation[0]);
    } catch (error) {
        console.error('Error deleting consultation:', error);
        res.status(500).json({ message: 'Error deleting consultation', error });
    }
};
