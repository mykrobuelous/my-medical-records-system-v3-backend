import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import patientsRouter from './routes/patients/patients.routes';
import consultationsRouter from './routes/consultations/consultations.routes';
import insuranceRouter from './routes/insurance/insurance.routes';
import seedRouter from './routes/seed/seed.routes';
import medicineRouter from './routes/medicine/medicine.routes';
import diagnosisRouter from './routes/diagnosis/diagnosis.routes';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/patients', patientsRouter);
app.use('/api/consultations', consultationsRouter);
app.use('/api/insurance', insuranceRouter);
app.use('/api/medicine', medicineRouter);
app.use('/api/diagnosis', diagnosisRouter);
app.use('/api/seed', seedRouter);

app.get('/health', (_req, res) => {
    res.json({ status: process.env.DATABASE_URL });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
