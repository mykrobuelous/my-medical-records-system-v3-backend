import { Router } from 'express';
import { getConsultations, getConsultationsByPatientId } from './consultation.controller';

const consultationsRouter = Router();

consultationsRouter.get('/', getConsultations);
consultationsRouter.get('/patient/:id', getConsultationsByPatientId);

export default consultationsRouter;
