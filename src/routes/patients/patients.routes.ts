import { Router } from 'express';
import {
    createPatient,
    deletePatient,
    getPatientById,
    getPatients,
    updatePatient,
} from './patients.controller';

const patientsRouter = Router();

patientsRouter.get('/', getPatients);
patientsRouter.get('/:id', getPatientById);
patientsRouter.post('/', createPatient);
patientsRouter.put('/:id', updatePatient);
patientsRouter.delete('/:id', deletePatient);

export default patientsRouter;
