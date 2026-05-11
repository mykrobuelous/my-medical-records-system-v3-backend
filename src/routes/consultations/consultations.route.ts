import { Router } from 'express';
import {
    createConsultation,
    deleteConsultation,
    getConsultationById,
    getConsultations,
    getConsultationsByPatientId,
    updateConsultation,
} from './consultation.controller';

const consultationsRouter = Router();

consultationsRouter.get('/', getConsultations);
consultationsRouter.get('/:id', getConsultationById);
consultationsRouter.get('/patient/:id', getConsultationsByPatientId);
consultationsRouter.post('/', createConsultation);
consultationsRouter.put('/:id', updateConsultation);
consultationsRouter.delete('/:id', deleteConsultation);

export default consultationsRouter;
