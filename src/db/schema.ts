import { date, pgTable, real, text, timestamp, uuid } from 'drizzle-orm/pg-core';

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
    consultationDate: timestamp('consultation_date').notNull().defaultNow(),
    chiefComplaint: text('chief_complaint').notNull(),
    subjective: text('subjective').notNull(),
    objective: text('objective').notNull(),
    assessment: text('assessment').notNull(),
    plan: text('plan').notNull(),
    height: real('height'), // e.g. in cm (flexible, can store decimals like 170.5)
    weight: real('weight'), // e.g. in kg

    insuranceId: uuid('insurance_id').references(() => insurances.id, { onDelete: 'set null' }), // e.g. "PhilHealth", "Maxicare"
    insuranceAmount: real('insurance_amount'), // money value (₱)

    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
export const insurances = pgTable('insurance', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
});

export const medicines = pgTable('medicine', {
    id: uuid('id').primaryKey().defaultRandom(),
    brandName: text('brand_name').notNull(),
    genericName: text('generic_name').notNull(),
});

export const diagnosis = pgTable('diagnosis', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
});

export type Patient = typeof patients.$inferSelect;
export type NewPatient = typeof patients.$inferInsert;
export type Consultation = typeof consultations.$inferSelect;
export type NewConsultation = typeof consultations.$inferInsert;
export type Insurance = typeof insurances.$inferSelect;
export type NewInsurance = typeof insurances.$inferInsert;
export type Medicine = typeof medicines.$inferSelect;
export type NewMedicine = typeof medicines.$inferInsert;
export type Diagnosis = typeof diagnosis.$inferSelect;
export type NewDiagnosis = typeof diagnosis.$inferInsert;
