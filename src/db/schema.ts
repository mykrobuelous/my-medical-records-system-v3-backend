import { date, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const patients = pgTable('patients', {
    id: uuid('id').primaryKey().defaultRandom(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    middleName: text('middle_name'),
    dateOfBirth: date('date_of_birth', { mode: 'date' }).notNull(),
    sex: text('sex').notNull(),
    civilStatus: text('civil_status').notNull(),
    contactNumber: text('contact_number').notNull(),
    email: text('email'),
    address: text('address').notNull(),
    emergencyContact: text('emergency_contact').notNull(),
    emergencyContactNumber: text('emergency_contact_number').notNull(),
    bloodType: text('blood_type').notNull(),
    allergies: text('allergies').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const consultations = pgTable('consultations', {
    id: uuid('id').primaryKey().defaultRandom(),
    patientId: uuid('patient_id')
        .notNull()
        .references(() => patients.id, { onDelete: 'cascade' }),
    consultationDate: timestamp('consultation_date').notNull(),
    chiefComplaint: text('chief_complaint').notNull(),
    subjective: text('subjective').notNull(),
    objective: text('objective').notNull(),
    assessment: text('assessment').notNull(),
    plan: text('plan').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type Patient = typeof patients.$inferSelect;
export type NewPatient = typeof patients.$inferInsert;
export type Consultation = typeof consultations.$inferSelect;
export type NewConsultation = typeof consultations.$inferInsert;
