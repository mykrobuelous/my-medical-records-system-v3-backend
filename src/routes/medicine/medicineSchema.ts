import { z } from 'zod';

export const medicineSchema = z.object({
    brandName: z.string().min(1),
    genericName: z.string().min(1),
});
