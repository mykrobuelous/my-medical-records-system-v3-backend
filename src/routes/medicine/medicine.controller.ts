import { Request, Response } from 'express';
import { db } from '../../db/db';
import { medicines } from '../../db/schema';
import { asc, eq } from 'drizzle-orm';
import { medicineSchema } from './medicineSchema';

export const getMedicine = async (req: Request, res: Response) => {
    try {
        const medicineData = await db.select().from(medicines).orderBy(asc(medicines.brandName));

        res.status(200).json(medicineData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medicine', error });
    }
};

export const getMedicineById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const medicineData = await db
            .select()
            .from(medicines)
            .where(eq(medicines.id, id as string))
            .orderBy(asc(medicines.brandName));

        if (medicineData) {
            return res.status(404).json({ message: 'Medicine not found' });
        }

        res.status(200).json(medicineData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medicine', error });
    }
};

export const createMedicine = async (req: Request, res: Response) => {
    const result = medicineSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid medicine data', errors: result.error });
    }
    try {
        const medicineData = await db.insert(medicines).values(result.data).returning();
        res.status(201).json(medicineData);
    } catch (error) {
        res.status(500).json({ message: 'Error creating medicine', error });
    }
};

export const updateMedicine = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = medicineSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: 'Invalid medicine data', errors: result.error });
    }
    try {
        const medicineData = await db
            .update(medicines)
            .set(result.data)
            .where(eq(medicines.id, id as string))
            .returning();
        if (!medicineData.length) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json(medicineData[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error updating medicine', error });
    }
};

export const deleteMedicine = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const medicineData = await db
            .delete(medicines)
            .where(eq(medicines.id, id as string))
            .returning();
        if (!medicineData.length) {
            return res.status(404).json({ message: 'Medicine not found' });
        }
        res.status(200).json({
            message: 'Medicine deleted successfully',
            medicine: medicineData[0],
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting medicine', error });
    }
};
