import { Request, Response } from 'express';
import { db } from '../../db/db';
import { consultations, patients } from '../../db/schema';
import { patientSchema } from './patientsSchema';
import { asc, eq } from 'drizzle-orm';

export const getPatients = async (req: Request, res: Response) => {
    try {
        const [patientData, consultationData] = await Promise.all([
            db.select().from(patients).orderBy(asc(patients.lastName)),
            db.select().from(consultations),
        ]);

        const result = patientData.map((patient) => ({
            ...patient,
            consultations: consultationData.filter((c) => c.patientId === patient.id),
        }));

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patients', error });
    }
};

export const getPatientById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const [patientData, consultationData] = await Promise.all([
            db
                .select()
                .from(patients)
                .where(eq(patients.id, id as string))
                .orderBy(asc(patients.lastName)),
            db
                .select()
                .from(consultations)
                .where(eq(consultations.patientId, id as string)),
        ]);

        if (!patientData.length) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.status(200).json({ ...patientData[0], consultations: consultationData });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patient', error });
    }
};

export const createPatient = async (req: Request, res: Response) => {
    const result = patientSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid patient data', errors: result.error });
    }
    const patientData = await db.insert(patients).values(result.data).returning();

    res.status(201).json(patientData);
    try {
    } catch (error) {
        res.status(500).json({ message: 'Error creating patient', error });
    }
};

export const updatePatient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = patientSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid patient data', errors: result.error });
    }
    try {
        const patientData = await db
            .update(patients)
            .set(result.data)
            .where(eq(patients.id, id as string))
            .returning();

        if (!patientData.length) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(patientData[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating patient', error });
    }
};

export const deletePatient = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedPatient = await db
            .delete(patients)
            .where(eq(patients.id, id as string))
            .returning();

        if (!deletedPatient.length) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json({
            message: 'Patient deleted successfully',
            patient: deletedPatient[0],
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting patient', error });
    }
};
