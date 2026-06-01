import { Router } from 'express';
import { seedController } from './seed.controller';

const seedRouter = Router();

seedRouter.post('/', seedController);

export default seedRouter;
