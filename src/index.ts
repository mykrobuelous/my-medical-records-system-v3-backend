import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { db } from './db/db';
import { consultations, patients } from './db/schema';
import { mockConsultations, mockPatients } from './data/data.types';
import patientsRouter from './routes/patients/patients.routes';
import consultationsRouter from './routes/consultations/consultations.route';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/patients', patientsRouter);
app.use('/api/consultations', consultationsRouter);

app.get('/health', (_req, res) => {
    res.json({ status: process.env.DATABASE_URL });
});

app.get('/api/seed', async (req: Request, res: Response) => {
    try {
        await db.delete(patients);
        await db.delete(consultations);

        const idMap = new Map<string, string>();

        const insertedPatients = await db
            .insert(patients)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .values(mockPatients.map(({ id, createdAt, updatedAt, ...rest }) => rest))
            .returning();

        // Map old "pat_001" → new UUID
        mockPatients.forEach((mockPatient, index) => {
            idMap.set(mockPatient.id, insertedPatients[index].id);
        });

        const insertedConsultations = await db
            .insert(consultations)
            .values(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                mockConsultations.map(({ id, patientId, ...rest }) => ({
                    ...rest,
                    patientId: idMap.get(patientId)!, // swap old id for real UUID
                }))
            )
            .returning();

        res.status(200).json({
            message: 'Database seeded successfully',
            patients: insertedPatients,
            consultations: insertedConsultations,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error seeding database', error });
    }

    res.status(200).json({ message: 'Database seeded successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
