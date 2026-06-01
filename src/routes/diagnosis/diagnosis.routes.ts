import { Router } from 'express';
import {
    createDiagnosis,
    deleteDiagnosis,
    getDiagnosis,
    updateDiagnosis,
} from './diagnosis.controller';

const diagnosisRouter = Router();

diagnosisRouter.get('/', getDiagnosis);
diagnosisRouter.post('/', createDiagnosis);
diagnosisRouter.put('/:id', updateDiagnosis);
diagnosisRouter.delete('/:id', deleteDiagnosis);

export default diagnosisRouter;
