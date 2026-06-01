import { Router } from 'express';
import {
    createConsultation,
    deleteConsultation,
    getConsultationById,
    getConsultationByInsuranceId,
    getConsultations,
    getConsultationsByPatientId,
    updateConsultation,
} from './consultations.controller';

const consultationsRouter = Router();

consultationsRouter.get('/', getConsultations);
consultationsRouter.get('/:id', getConsultationById);
consultationsRouter.get('/patient/:id', getConsultationsByPatientId);
consultationsRouter.get('/insurance/:id', getConsultationByInsuranceId);
consultationsRouter.post('/', createConsultation);
consultationsRouter.put('/:id', updateConsultation);
consultationsRouter.delete('/:id', deleteConsultation);

export default consultationsRouter;
