import { z } from 'zod';

export const diagnosisSchema = z.object({
    name: z.string().min(1),
});
