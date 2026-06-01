import { Request, Response } from 'express';
import { db } from '../../db/db';
import { consultations, diagnosis, insurances, medicines, patients } from '../../db/schema';
import {
    mockConsultations,
    mockDiagnosis,
    mockInsurances,
    mockMedicine,
    mockPatients,
} from '../../data/data.types';

export const seedController = async (req: Request, res: Response) => {
    try {
        await db.delete(consultations);
        await db.delete(patients);
        await db.delete(insurances);
        await db.delete(medicines);
        await db.delete(diagnosis);

        const idMap = new Map<string, string>();
        const insuranceMap = new Map<string, string>();

        const insertedPatients = await db
            .insert(patients)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .values(mockPatients.map(({ id, createdAt, updatedAt, ...rest }) => rest))
            .returning();
        const insertedInsurances = await db
            .insert(insurances)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .values(mockInsurances.map(({ id, ...rest }) => rest))
            .returning();

        mockPatients.forEach((mockPatient, index) => {
            idMap.set(mockPatient.id, insertedPatients[index].id);
        });

        mockInsurances.forEach((mockInsurance, index) => {
            insuranceMap.set(mockInsurance.id, insertedInsurances[index].id);
        });

        const insertedConsultations = await db
            .insert(consultations)
            .values(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                mockConsultations.map(({ id, patientId, ...rest }) => ({
                    ...rest,
                    patientId: idMap.get(patientId)!,
                    insuranceId: rest.insuranceId
                        ? (insuranceMap.get(rest.insuranceId) ?? null)
                        : null,
                }))
            )
            .returning();

        const insertedMedicines = await db
            .insert(medicines)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .values(mockMedicine.map(({ id, ...rest }) => rest))
            .returning();

        const insertedDiagnosis = await db
            .insert(diagnosis)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .values(mockDiagnosis.map(({ id, ...rest }) => rest))
            .returning();

        res.status(200).json({
            message: 'Database seeded successfully',
            patients: insertedPatients,
            consultations: insertedConsultations,
            insurances: insertedInsurances,
            medicines: insertedMedicines,
            diagnosis: insertedDiagnosis,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error seeding database', error });
    }
};
