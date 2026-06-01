import { z } from 'zod';

export const consultationSchema = z.object({
    patientId: z.string().uuid('Invalid patient ID'),
    chiefComplaint: z.string().min(1, 'Chief complaint is required'),
    subjective: z.string().min(1, 'Subjective is required'),
    objective: z.string().min(1, 'Objective is required'),
    assessment: z.string().min(1, 'Assessment is required'),
    plan: z.string().min(1, 'Plan is required'),
    height: z.coerce.number().positive('Height must be greater than 0').optional(),
    weight: z.coerce.number().positive('Weight must be greater than 0').optional(),
    insuranceId: z.string().optional(),
    insuranceAmount: z.coerce.number().min(0, 'Insurance amount cannot be negative').optional(),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
