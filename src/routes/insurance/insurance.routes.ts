import { Router } from 'express';
import { createInsurance, getInsurance, updateInsurance } from './insurance.controller';

const insuranceRouter = Router();

insuranceRouter.get('/', getInsurance);
insuranceRouter.post('/', createInsurance);
insuranceRouter.put('/:id', updateInsurance);
insuranceRouter.delete('/:id', updateInsurance);

export default insuranceRouter;
