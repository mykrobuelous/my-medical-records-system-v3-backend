import { Request, Response } from 'express';
import { db } from '../../db/db';
import { consultations, insurances } from '../../db/schema';
import { insuranceSchema } from './insuranceSchema';
import { and, eq, gte, isNull, lte, sql } from 'drizzle-orm';

export const getInsurance = async (req: Request, res: Response) => {
    try {
        const { startDate, endDate } = req.query;

        const dateFilter =
            startDate && endDate
                ? and(
                      gte(consultations.consultationDate, new Date(startDate as string)),
                      lte(consultations.consultationDate, new Date(endDate as string))
                  )
                : undefined;

        const insuredData = await db
            .select({
                id: insurances.id,
                name: insurances.name,
                totalAmount: sql<number>`COALESCE(SUM(${consultations.insuranceAmount}), 0)`,
            })
            .from(insurances)
            .leftJoin(consultations, and(eq(consultations.insuranceId, insurances.id), dateFilter))
            .groupBy(insurances.id, insurances.name);

        const uninsuredData = await db
            .select({
                totalAmount: sql<number>`COALESCE(SUM(${consultations.insuranceAmount}), 0)`,
            })
            .from(consultations)
            .where(and(isNull(consultations.insuranceId), dateFilter));

        const result = [
            ...insuredData,
            {
                id: null,
                name: 'None',
                totalAmount: uninsuredData[0].totalAmount,
            },
        ];

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching insurance', error });
    }
};

export const createInsurance = async (req: Request, res: Response) => {
    const result = insuranceSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid insurance data', errors: result.error });
    }
    try {
        const insuranceData = await db.insert(insurances).values(result.data).returning();

        res.status(201).json(insuranceData);
    } catch (error) {
        res.status(500).json({ message: 'Error creating insurance', error });
    }
};

export const updateInsurance = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = insuranceSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid insurance data', errors: result.error });
    }
    try {
        const insuranceData = await db
            .update(insurances)
            .set(result.data)
            .where(eq(insurances.id, id as string))
            .returning();
        if (!insuranceData.length) {
            return res.status(404).json({ message: 'Insurance not found' });
        }
        res.status(200).json(insuranceData[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error updating insurance', error });
    }
};

export const deleteInsurance = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const insuranceData = await db
            .delete(insurances)
            .where(eq(insurances.id, id as string))
            .returning();

        if (!insuranceData.length) {
            return res.status(404).json({ message: 'Insurance not found' });
        }

        res.status(200).json({
            message: 'Insurance deleted successfully',
            insurance: insuranceData[0],
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting insurance', error });
    }
};
