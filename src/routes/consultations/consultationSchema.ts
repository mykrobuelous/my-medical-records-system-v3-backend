import { z } from 'zod';

export const consultationSchema = z.object({
    patientId: z.string().uuid('Invalid patient ID'),
    chiefComplaint: z.string().min(1, 'Chief complaint is required'),
    subjective: z.string().min(1, 'Subjective is required'),
    objective: z.string().min(1, 'Objective is required'),
    assessment: z.string().min(1, 'Assessment is required'),
    plan: z.string().min(1, 'Plan is required'),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
