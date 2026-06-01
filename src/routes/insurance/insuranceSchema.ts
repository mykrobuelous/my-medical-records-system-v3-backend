import { z } from 'zod';

export const insuranceSchema = z.object({
    name: z.string().min(1, 'Name is required'),
});
