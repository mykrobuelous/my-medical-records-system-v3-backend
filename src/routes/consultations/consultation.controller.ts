import { Request, Response } from 'express';
import { db } from '../../db/db';
import { consultations, patients } from '../../db/schema';
import { desc, eq } from 'drizzle-orm';

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
