import { Router } from 'express';
import {
    createMedicine,
    deleteMedicine,
    getMedicine,
    getMedicineById,
    updateMedicine,
} from './medicine.controller';

const medicineRouter = Router();

medicineRouter.get('/', getMedicine);
medicineRouter.get('/:id', getMedicineById);
medicineRouter.post('/', createMedicine);
medicineRouter.put('/:id', updateMedicine);
medicineRouter.delete('/:id', deleteMedicine);

export default medicineRouter;
