import { z } from 'zod';

export const patientSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    middleName: z.string().nullish(),
    dateOfBirth: z.coerce.date().refine((val) => !isNaN(val.getTime()), {
        message: 'Date of birth is required',
    }),
    sex: z.string().min(1, 'Sex is required'),
    civilStatus: z.string().min(1, 'Civil status is required'),
    contactNumber: z.string().min(1, 'Contact number is required'),
    email: z.string().nullish(),
    address: z.string().min(1, 'Address is required'),
    emergencyContact: z.string().min(1, 'Emergency contact is required'),
    emergencyContactNumber: z.string().min(1, 'Emergency contact number is required'),
    bloodType: z.string().min(1, 'Blood type is required'),
    allergies: z.string().min(1, 'Allergies is required'),
});

export type PatientFormData = z.infer<typeof patientSchema>;
