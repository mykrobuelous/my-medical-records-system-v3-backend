import { Request, Response } from 'express';
import { db } from '../../db/db';
import { diagnosis } from '../../db/schema';
import { asc, eq } from 'drizzle-orm';
import { diagnosisSchema } from './diagnosisSchema';

export const getDiagnosis = async (req: Request, res: Response) => {
    try {
        const diagnosisData = await db.select().from(diagnosis).orderBy(asc(diagnosis.name));

        res.status(200).json(diagnosisData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching diagnosis', error });
    }
};

export const createDiagnosis = async (req: Request, res: Response) => {
    const result = diagnosisSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid diagnosis data', errors: result.error });
    }
    try {
        const diagnosisData = await db.insert(diagnosis).values(result.data).returning();
        res.status(201).json(diagnosisData);
    } catch (error) {
        res.status(500).json({ message: 'Error creating diagnosis', error });
    }
};

export const updateDiagnosis = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = diagnosisSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid diagnosis data', errors: result.error });
    }
    try {
        const diagnosisData = await db
            .update(diagnosis)
            .set(result.data)
            .where(eq(diagnosis.id, id as string))
            .returning();
        res.status(200).json(diagnosisData);
    } catch (error) {
        res.status(500).json({ message: 'Error updating diagnosis', error });
    }
};

export const deleteDiagnosis = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const diagnosisData = await db
            .delete(diagnosis)
            .where(eq(diagnosis.id, id as string))
            .returning();
        if (diagnosisData.length) {
            return res.status(404).json({ message: 'Diagnosis not found' });
        }
        res.status(200).json({
            message: 'Diagnosis deleted successfully',
            medicine: diagnosisData[0],
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting diagnosis', error });
    }
};
