import { IDBrand } from '../utils/utilTypes';

export type PatientType = {
    id: IDBrand;
    firstName: string;
    lastName: string;
    middleName?: string;
    dateOfBirth: Date;
    sex: string;
    civilStatus: string;
    contactNumber: string;
    email?: string;
    address: string;
    emergencyContact: string;
    emergencyContactNumber: string;
    bloodType: string;
    allergies: string;
    createdAt: Date;
    updatedAt: Date;
};

export type ConsultationType = {
    id: string;
    patientId: string;
    consultationDate: Date;
    chiefComplaint: string;
    subjective: string;
    objective: string;
    assessment: string;
    plan: string;
    height: number; // cm
    weight: number; // kg
    insuranceId: string | null;
    insuranceAmount?: number; // ₱
    createdAt: Date;
    updatedAt: Date;
};

export type InsuranceType = {
    id: string;
    name: string;
};

export type MedicineType = {
    id: string;
    brandName: string;
    genericName: string;
};

export type DiagnosisType = {
    id: string;
    name: string;
};
export type InsuranceWithTotalType = InsuranceType & {
    totalAmount: number;
};

export type ConsultationWithInsuranceType = {
    consultations: ConsultationWithPatientType[];
    insurances: InsuranceType | null;
};

export type ConsultationWithPatientType = {
    consultation: ConsultationType;
    patient: PatientType;
};

export type PatientWithConsultationsType = PatientType & {
    consultations: ConsultationType[];
};

export const mockMedicine: MedicineType[] = [
    { id: 'med_001', brandName: 'Tylenol', genericName: 'Acetaminophen' },
    { id: 'med_002', brandName: 'Advil', genericName: 'Ibuprofen' },
    { id: 'med_003', brandName: 'Augmentin', genericName: 'Amoxicillin-Clavulanate' },
    { id: 'med_004', brandName: 'Lipitor', genericName: 'Atorvastatin' },
    { id: 'med_005', brandName: 'Zoloft', genericName: 'Sertraline' },
];

export const mockInsurances: InsuranceType[] = [
    {
        id: 'ins_001',
        name: 'Intellicare',
    },
    {
        id: 'ins_002',
        name: 'Maxicare',
    },
    {
        id: 'ins_003',
        name: 'Philhealth',
    },
];

export const mockPatients: PatientType[] = [
    {
        id: 'pat_001' as IDBrand,
        firstName: 'Maria',
        lastName: 'Santos',
        middleName: 'Cruz',
        dateOfBirth: new Date('1990-03-15'),
        sex: 'female',
        civilStatus: 'married',
        contactNumber: '09171234567',
        email: 'maria.santos@email.com',
        address: '123 Rizal St., Cagayan de Oro City',
        emergencyContact: 'Jose Santos',
        emergencyContactNumber: '09179876543',
        bloodType: 'O+',
        allergies: 'Penicillin',
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-10'),
    },
    {
        id: 'pat_002' as IDBrand,
        firstName: 'Roberto',
        lastName: 'Dela Cruz',
        dateOfBirth: new Date('1978-07-22'),
        sex: 'male',
        civilStatus: 'single',
        contactNumber: '09281234567',
        address: '45 Mabini Ave., Iligan City',
        emergencyContact: 'Lucia Dela Cruz',
        emergencyContactNumber: '09289876543',
        bloodType: 'A+',
        allergies: 'None',
        createdAt: new Date('2024-02-05'),
        updatedAt: new Date('2024-02-05'),
    },
    {
        id: 'pat_003' as IDBrand,
        firstName: 'Angela',
        lastName: 'Reyes',
        middleName: 'Bautista',
        dateOfBirth: new Date('2001-11-30'),
        sex: 'female',
        civilStatus: 'single',
        contactNumber: '09351234567',
        email: 'angela.reyes@gmail.com',
        address: '78 Quezon Blvd., Cagayan de Oro City',
        emergencyContact: 'Ramon Reyes',
        emergencyContactNumber: '09359876543',
        bloodType: 'B+',
        allergies: 'Sulfa drugs, Shellfish',
        createdAt: new Date('2024-03-18'),
        updatedAt: new Date('2024-03-18'),
    },
    {
        id: 'pat_004' as IDBrand,
        firstName: 'Fernando',
        lastName: 'Villanueva',
        middleName: 'Gomez',
        dateOfBirth: new Date('1955-05-08'),
        sex: 'male',
        civilStatus: 'widowed',
        contactNumber: '09121234567',
        address: '12 Luna St., Bukidnon',
        emergencyContact: 'Carlos Villanueva',
        emergencyContactNumber: '09129876543',
        bloodType: 'AB+',
        allergies: 'Aspirin, NSAIDs',
        createdAt: new Date('2024-04-01'),
        updatedAt: new Date('2024-04-01'),
    },
    {
        id: 'pat_005' as IDBrand,
        firstName: 'Cristina',
        lastName: 'Mendoza',
        dateOfBirth: new Date('1985-09-14'),
        sex: 'female',
        civilStatus: 'separated',
        contactNumber: '09451234567',
        email: 'cmendoza@yahoo.com',
        address: '99 Burgos St., Cagayan de Oro City',
        emergencyContact: 'Lita Mendoza',
        emergencyContactNumber: '09459876543',
        bloodType: 'O-',
        allergies: 'None',
        createdAt: new Date('2024-04-20'),
        updatedAt: new Date('2024-04-20'),
    },
    {
        id: 'pat_006' as IDBrand,
        firstName: 'Benjamin',
        lastName: 'Tomas',
        middleName: 'Aguilar',
        dateOfBirth: new Date('1967-12-04'),
        sex: 'male',
        civilStatus: 'married',
        contactNumber: '09181234567',
        email: 'bjtomas@gmail.com',
        address: '33 Aguinaldo St., Cagayan de Oro City',
        emergencyContact: 'Patricia Tomas',
        emergencyContactNumber: '09189876543',
        bloodType: 'A-',
        allergies: 'Codeine',
        createdAt: new Date('2024-05-03'),
        updatedAt: new Date('2024-05-03'),
    },
    {
        id: 'pat_007' as IDBrand,
        firstName: 'Lourdes',
        lastName: 'Pascual',
        middleName: 'Navarro',
        dateOfBirth: new Date('1995-06-17'),
        sex: 'female',
        civilStatus: 'single',
        contactNumber: '09391234567',
        email: 'lourdes.pascual@outlook.com',
        address: '7 Bonifacio Ave., Cagayan de Oro City',
        emergencyContact: 'Teresita Pascual',
        emergencyContactNumber: '09399876543',
        bloodType: 'B-',
        allergies: 'Latex, Ibuprofen',
        createdAt: new Date('2024-06-11'),
        updatedAt: new Date('2024-06-11'),
    },
    {
        id: 'pat_008' as IDBrand,
        firstName: 'Ramil',
        lastName: 'Soriano',
        dateOfBirth: new Date('1982-02-28'),
        sex: 'male',
        civilStatus: 'married',
        contactNumber: '09261234567',
        address: '210 Del Pilar St., Jasaan, Misamis Oriental',
        emergencyContact: 'Gloria Soriano',
        emergencyContactNumber: '09269876543',
        bloodType: 'O+',
        allergies: 'None',
        createdAt: new Date('2024-07-09'),
        updatedAt: new Date('2024-07-09'),
    },
    {
        id: 'pat_009' as IDBrand,
        firstName: 'Marites',
        lastName: 'Flores',
        middleName: 'Ignacio',
        dateOfBirth: new Date('1972-09-01'),
        sex: 'female',
        civilStatus: 'widowed',
        contactNumber: '09551234567',
        email: 'marites.flores@yahoo.com',
        address: '89 Osmeña St., El Salvador City',
        emergencyContact: 'Jomar Flores',
        emergencyContactNumber: '09559876543',
        bloodType: 'AB-',
        allergies: 'Metformin',
        createdAt: new Date('2024-08-22'),
        updatedAt: new Date('2024-08-22'),
    },
    {
        id: 'pat_010' as IDBrand,
        firstName: 'Julius',
        lastName: 'Cabrera',
        middleName: 'Estrada',
        dateOfBirth: new Date('2008-04-19'),
        sex: 'male',
        civilStatus: 'single',
        contactNumber: '09471234567',
        address: '15 Pag-asa St., Cagayan de Oro City',
        emergencyContact: 'Noel Cabrera',
        emergencyContactNumber: '09479876543',
        bloodType: 'A+',
        allergies: 'None',
        createdAt: new Date('2024-09-30'),
        updatedAt: new Date('2024-09-30'),
    },
];

export const mockConsultations: ConsultationType[] = [
    // Maria Santos (pat_001) - 3 consultations
    {
        id: 'con_001',
        patientId: 'pat_001',
        consultationDate: new Date('2024-05-10T09:00:00'),
        chiefComplaint: 'Persistent cough and low-grade fever for 3 days',
        subjective:
            'Patient reports dry cough, mild fever (37.8°C), and fatigue. No shortness of breath. No known COVID exposure.',
        objective:
            'Temp: 37.8°C, BP: 110/70, HR: 88 bpm, RR: 18. Lungs clear on auscultation. Throat slightly erythematous.',
        assessment: 'Upper respiratory tract infection (URTI)',
        plan: 'Paracetamol 500mg TID PRN fever. Increased fluid intake. Rest. Follow up in 5 days if not improving.',
        height: 162,
        weight: 58,
        insuranceId: null,
        insuranceAmount: 1500,
        createdAt: new Date('2024-05-10'),
        updatedAt: new Date('2024-05-10'),
    },
    {
        id: 'con_002',
        patientId: 'pat_001',
        consultationDate: new Date('2024-07-22T10:30:00'),
        chiefComplaint: 'Headache and dizziness for 2 days',
        subjective:
            'Patient complains of throbbing headache, mostly frontal. Mild dizziness upon standing. No vomiting. Last menstrual period 2 weeks ago.',
        objective:
            'BP: 130/85, HR: 82 bpm, Temp: 36.6°C. Neurological exam unremarkable. No neck stiffness.',
        assessment: 'Tension-type headache, mild hypertension noted',
        plan: 'Ibuprofen 400mg PRN. Low-sodium diet counseling. BP monitoring for 2 weeks. Return if BP stays elevated.',
        height: 162,
        weight: 59,
        insuranceId: null,
        insuranceAmount: 1500,
        createdAt: new Date('2024-07-22'),
        updatedAt: new Date('2024-07-22'),
    },
    {
        id: 'con_003',
        patientId: 'pat_001',
        consultationDate: new Date('2024-10-05T08:00:00'),
        chiefComplaint: 'Annual check-up',
        subjective: 'No active complaints. Feels generally well. On no current medications.',
        objective:
            'BP: 118/75, HR: 76 bpm, Temp: 36.5°C, Weight: 58kg, Height: 162cm. Physical exam within normal limits.',
        assessment: 'Healthy adult, no acute findings',
        plan: 'Continue healthy lifestyle. CBC and lipid panel requested. Return in 1 year or as needed.',
        height: 162,
        weight: 58,
        insuranceId: null,
        insuranceAmount: 1500,
        createdAt: new Date('2024-10-05'),
        updatedAt: new Date('2024-10-05'),
    },

    // Roberto Dela Cruz (pat_002) - 2 consultations
    {
        id: 'con_004',
        patientId: 'pat_002',
        consultationDate: new Date('2024-06-14T14:00:00'),
        chiefComplaint: 'Lower back pain for 1 week',
        subjective:
            'Patient reports dull aching pain in the lower back, worsens with prolonged sitting. Works as a driver. No radiating pain to legs.',
        objective:
            'BP: 125/80, HR: 79 bpm. Tenderness on lumbar paraspinal muscles. Straight leg raise negative bilaterally.',
        assessment: 'Mechanical low back pain',
        plan: 'Mefenamic acid 500mg TID x5 days. Hot compress. Posture and ergonomics counseling. Avoid heavy lifting.',
        height: 171,
        weight: 74,
        insuranceId: 'ins_002',
        insuranceAmount: 2500,
        createdAt: new Date('2024-06-14'),
        updatedAt: new Date('2024-06-14'),
    },
    {
        id: 'con_005',
        patientId: 'pat_002',
        consultationDate: new Date('2024-09-03T11:00:00'),
        chiefComplaint: 'Recurrent acid reflux and epigastric pain',
        subjective:
            'Patient complains of burning sensation in the chest after meals, especially at night. Drinks coffee 3x daily. Smoker.',
        objective:
            'BP: 122/78, HR: 80 bpm. Epigastric tenderness on palpation. No guarding or rigidity.',
        assessment: 'Gastroesophageal reflux disease (GERD)',
        plan: 'Omeprazole 20mg OD before breakfast x2 weeks. Advised to reduce coffee and stop smoking. Elevate head of bed. Follow up in 2 weeks.',
        height: 171,
        weight: 75,
        insuranceId: 'ins_003',
        insuranceAmount: 2500,
        createdAt: new Date('2024-09-03'),
        updatedAt: new Date('2024-09-03'),
    },

    // Angela Reyes (pat_003) - 2 consultations
    {
        id: 'con_006',
        patientId: 'pat_003',
        consultationDate: new Date('2024-04-08T09:30:00'),
        chiefComplaint: 'Skin rash on forearms after eating seafood',
        subjective:
            'Patient developed pruritic raised welts on both forearms 30 minutes after eating shrimp. No facial swelling, no difficulty breathing.',
        objective:
            'BP: 100/65, HR: 92 bpm. Urticarial wheals noted on bilateral forearms. No angioedema. No stridor.',
        assessment: 'Allergic reaction (urticaria) — shellfish allergy confirmed',
        plan: 'Cetirizine 10mg OD x3 days. Avoid shellfish strictly. Shellfish allergy documented. Advised to seek ER immediately if symptoms worsen.',
        height: 158,
        weight: 52,
        insuranceId: 'ins_001',
        insuranceAmount: 1200,
        createdAt: new Date('2024-04-08'),
        updatedAt: new Date('2024-04-08'),
    },
    {
        id: 'con_007',
        patientId: 'pat_003',
        consultationDate: new Date('2024-08-19T15:00:00'),
        chiefComplaint: 'Irregular menstrual cycle for 3 months',
        subjective:
            'Patient reports missed period for 2 months then heavy bleeding last month. No pain. Not sexually active. Increased stress due to school.',
        objective: 'BP: 105/68, HR: 84 bpm. Abdomen soft, non-tender. No palpable masses.',
        assessment: 'Oligomenorrhea, likely stress-induced',
        plan: 'Hormonal workup requested (FSH, LH, TSH, prolactin). Stress management counseling. Follow up with results.',
        height: 158,
        weight: 53,
        insuranceId: 'ins_003',
        insuranceAmount: 1200,
        createdAt: new Date('2024-08-19'),
        updatedAt: new Date('2024-08-19'),
    },

    // Fernando Villanueva (pat_004) - 2 consultations
    {
        id: 'con_008',
        patientId: 'pat_004',
        consultationDate: new Date('2024-05-28T10:00:00'),
        chiefComplaint: 'Shortness of breath on exertion and leg swelling',
        subjective:
            'Patient reports progressive dyspnea when climbing stairs, bilateral ankle swelling for 2 weeks. History of hypertension. Currently not on medications.',
        objective:
            'BP: 158/95, HR: 96 bpm, RR: 22. JVD present. Bibasal crackles on auscultation. Pitting edema bilateral ankles (+2).',
        assessment: 'Congestive heart failure (CHF) exacerbation, hypertensive',
        plan: 'Refer to cardiologist urgently. Furosemide 40mg OD started. Salt and fluid restriction. ECG and chest X-ray ordered.',
        height: 169,
        weight: 78,
        insuranceId: 'ins_003',
        insuranceAmount: 3500,
        createdAt: new Date('2024-05-28'),
        updatedAt: new Date('2024-05-28'),
    },
    {
        id: 'con_009',
        patientId: 'pat_004',
        consultationDate: new Date('2024-08-12T09:00:00'),
        chiefComplaint: 'Follow-up for heart condition',
        subjective:
            'Patient feels improved after starting medications from cardiologist. Less dyspnea, swelling reduced. Compliant with low-salt diet.',
        objective:
            'BP: 132/84, HR: 78 bpm, RR: 18. Lungs clear. Mild residual ankle edema (+1). Weight down 3kg from last visit.',
        assessment: 'CHF — improving, hypertension better controlled',
        plan: 'Continue current medications. Maintain diet and activity restrictions. Follow up with cardiologist next month. Return here in 6 weeks.',
        height: 169,
        weight: 75,
        insuranceId: 'ins_003',
        insuranceAmount: 3500,
        createdAt: new Date('2024-08-12'),
        updatedAt: new Date('2024-08-12'),
    },

    // Cristina Mendoza (pat_005) - 1 consultation
    {
        id: 'con_010',
        patientId: 'pat_005',
        consultationDate: new Date('2024-09-25T13:00:00'),
        chiefComplaint: 'Fatigue, weight gain, and feeling cold all the time',
        subjective:
            'Patient reports persistent fatigue for 2 months, gained 5kg without dietary changes, always feeling cold, hair thinning. No previous thyroid history.',
        objective:
            'BP: 112/72, HR: 62 bpm, Temp: 36.2°C. Skin dry, hair brittle. Mild facial puffiness. No goiter palpated.',
        assessment: 'Clinical suspicion for hypothyroidism',
        plan: 'TSH, Free T4 ordered. Return in 1 week with results. Avoid starting treatment until labs confirmed.',
        height: 155,
        weight: 66,
        insuranceId: 'ins_002',
        insuranceAmount: 1800,
        createdAt: new Date('2024-09-25'),
        updatedAt: new Date('2024-09-25'),
    },

    // Benjamin Tomas (pat_006) — 6 consultations
    {
        id: 'con_011',
        patientId: 'pat_006',
        consultationDate: new Date('2024-05-10T08:30:00'),
        chiefComplaint: 'Elevated blood sugar readings at home',
        subjective:
            'Patient reports fasting blood glucose readings between 160–190 mg/dL for the past 2 weeks using home glucometer. Family history of DM type 2. No current medications.',
        objective:
            'BP: 138/88, HR: 82 bpm. Weight: 87kg, Height: 168cm, BMI: 30.8. Random CBG: 198 mg/dL. No peripheral neuropathy signs.',
        assessment: 'Newly diagnosed Diabetes Mellitus type 2, overweight',
        plan: 'Metformin 500mg BID with meals started. HbA1c, FBS, lipid panel, creatinine ordered. Diabetic diet counseling. Follow up in 2 weeks.',
        height: 168,
        weight: 87,
        insuranceId: 'ins_002',
        insuranceAmount: 3000,
        createdAt: new Date('2024-05-10'),
        updatedAt: new Date('2024-05-10'),
    },
    {
        id: 'con_012',
        patientId: 'pat_006',
        consultationDate: new Date('2024-05-27T09:00:00'),
        chiefComplaint: 'Follow-up for diabetes, lab results review',
        subjective:
            'Patient tolerating Metformin well, only mild GI upset the first few days. Home CBG readings now 140–160 mg/dL. Adhering to diet changes.',
        objective:
            'BP: 134/85, HR: 80 bpm. HbA1c: 8.4%. FBS: 162 mg/dL. LDL: 138 mg/dL. Creatinine: 0.9 mg/dL.',
        assessment: 'DM type 2 — partially controlled; dyslipidemia',
        plan: 'Increase Metformin to 1000mg BID. Atorvastatin 20mg OD added for dyslipidemia. Continue dietary modifications and increase daily walking. Follow up in 4 weeks.',
        height: 168,
        weight: 86,
        insuranceId: 'ins_003',
        insuranceAmount: 3000,
        createdAt: new Date('2024-05-27'),
        updatedAt: new Date('2024-05-27'),
    },
    {
        id: 'con_013',
        patientId: 'pat_006',
        consultationDate: new Date('2024-07-01T10:00:00'),
        chiefComplaint: 'Tingling sensation in both feet for 3 weeks',
        subjective:
            'Patient notes a pins-and-needles feeling in the soles of both feet, worse at night. Denies pain. CBG averaging 130–150 mg/dL at home.',
        objective:
            'BP: 130/82, HR: 78 bpm. Monofilament test: reduced sensation at plantar surface bilateral. Ankle reflexes intact. Pedal pulses present.',
        assessment: 'Early peripheral neuropathy secondary to DM type 2',
        plan: 'Methylcobalamin 500mcg OD added. Reinforce tight glycemic control. Foot care education given. Referral to ophthalmology for baseline fundoscopy. Follow up in 4 weeks.',
        height: 168,
        weight: 85,
        insuranceId: 'ins_001',
        insuranceAmount: 3000,
        createdAt: new Date('2024-07-01'),
        updatedAt: new Date('2024-07-01'),
    },
    {
        id: 'con_014',
        patientId: 'pat_006',
        consultationDate: new Date('2024-08-05T08:00:00'),
        chiefComplaint: 'Routine DM follow-up',
        subjective:
            'Patient reports feeling better overall. Foot tingling slightly improved. Has started daily 30-minute walks. CBG 120–140 mg/dL.',
        objective:
            'BP: 126/80, HR: 76 bpm. Weight: 84kg (lost 3kg). CBG: 128 mg/dL. Feet: no ulcers or lesions.',
        assessment: 'DM type 2 — improving control; peripheral neuropathy stable',
        plan: 'Continue current medications. Repeat HbA1c in 1 month. Weight loss progress commended. Continue foot monitoring.',
        height: 168,
        weight: 84,
        insuranceId: 'ins_003',
        insuranceAmount: 3000,
        createdAt: new Date('2024-08-05'),
        updatedAt: new Date('2024-08-05'),
    },
    {
        id: 'con_015',
        patientId: 'pat_006',
        consultationDate: new Date('2024-09-09T09:30:00'),
        chiefComplaint: 'HbA1c results and blood pressure spike episode',
        subjective:
            'Patient presents with HbA1c result of 7.1% — improved. Also reports one episode of BP 160/100 at a pharmacy last week. No headache or visual changes at that time.',
        objective: 'BP: 144/90 today. HR: 84 bpm. Weight: 83kg. CBG: 122 mg/dL.',
        assessment: 'DM type 2 — well-controlled. New hypertension, stage 1.',
        plan: 'Amlodipine 5mg OD started for hypertension. Home BP monitoring advised (morning and evening). Continue DM medications. Follow up in 4 weeks.',
        height: 168,
        weight: 83,
        insuranceId: 'ins_001',
        insuranceAmount: 3000,
        createdAt: new Date('2024-09-09'),
        updatedAt: new Date('2024-09-09'),
    },
    {
        id: 'con_016',
        patientId: 'pat_006',
        consultationDate: new Date('2024-10-14T08:00:00'),
        chiefComplaint: 'Routine follow-up, BP and DM monitoring',
        subjective:
            'Patient reports home BP averaging 128/82. CBG 110–130 mg/dL. Tolerating all medications. No new complaints. Foot tingling now minimal.',
        objective:
            'BP: 126/80, HR: 74 bpm. Weight: 82kg. Feet: intact, monofilament sensation improved at 3 of 5 test points.',
        assessment:
            'DM type 2 — well-controlled. Hypertension — controlled on Amlodipine. Peripheral neuropathy improving.',
        plan: 'Continue all medications. Repeat HbA1c, lipid panel, creatinine in 3 months. Annual eye exam reminder given. Follow up in 6 weeks.',
        height: 168,
        weight: 82,
        insuranceId: 'ins_002',
        insuranceAmount: 3000,
        createdAt: new Date('2024-10-14'),
        updatedAt: new Date('2024-10-14'),
    },

    // Lourdes Pascual (pat_007) — 4 consultations
    {
        id: 'con_017',
        patientId: 'pat_007',
        consultationDate: new Date('2024-06-18T13:00:00'),
        chiefComplaint: 'Severe dysmenorrhea affecting daily activities',
        subjective:
            'Patient reports cramping pain rated 8/10 during menstruation, lasting 3–4 days each cycle. Associated with nausea and inability to go to work. Present for 2 years, worsening.',
        objective:
            'BP: 108/70, HR: 90 bpm. Abdomen soft, mild lower quadrant tenderness. No palpable adnexal masses on external exam.',
        assessment: 'Severe primary dysmenorrhea; secondary cause (endometriosis) to be ruled out',
        plan: 'Mefenamic acid 500mg TID started 1 day before expected period. Referral to OB-GYN for pelvic ultrasound and further evaluation. Follow up after specialist visit.',
        height: 160,
        weight: 55,
        insuranceId: 'ins_001',
        insuranceAmount: 1500,
        createdAt: new Date('2024-06-18'),
        updatedAt: new Date('2024-06-18'),
    },
    {
        id: 'con_018',
        patientId: 'pat_007',
        consultationDate: new Date('2024-08-07T10:30:00'),
        chiefComplaint: 'Allergic reaction — swollen lips and hives after taking ibuprofen',
        subjective:
            'Patient accidentally took ibuprofen at a pharmacy for pain, not recalling her allergy. Developed labial swelling and urticaria within 1 hour. No respiratory distress.',
        objective:
            'BP: 100/62, HR: 104 bpm. Angioedema of lips, moderate. Urticarial wheals on trunk and arms. No stridor. SpO2: 98%.',
        assessment: 'NSAID-induced angioedema and urticaria — moderate severity',
        plan: 'Diphenhydramine 50mg IM given. Prednisolone 30mg OD x3 days. Ibuprofen allergy prominently documented. MedicAlert bracelet advised. Follow up in 48 hours.',
        height: 160,
        weight: 55,
        insuranceId: 'ins_003',
        insuranceAmount: 1500,
        createdAt: new Date('2024-08-07'),
        updatedAt: new Date('2024-08-07'),
    },
    {
        id: 'con_019',
        patientId: 'pat_007',
        consultationDate: new Date('2024-08-09T09:00:00'),
        chiefComplaint: 'Follow-up for allergic reaction 2 days ago',
        subjective:
            'Patient reports significant improvement. Lip swelling resolved, rash fading. Completed prednisolone course. No recurrence.',
        objective: 'BP: 106/68, HR: 78 bpm. Lips: no edema. Skin: fading erythematous wheals only.',
        assessment: 'Resolving NSAID angioedema and urticaria',
        plan: 'No further medication needed. Reinforce avoidance of all NSAIDs. Advised to carry antihistamines at all times. Return as needed.',
        height: 160,
        weight: 55,
        insuranceId: 'ins_001',
        insuranceAmount: 1500,
        createdAt: new Date('2024-08-09'),
        updatedAt: new Date('2024-08-09'),
    },
    {
        id: 'con_020',
        patientId: 'pat_007',
        consultationDate: new Date('2024-10-22T14:00:00'),
        chiefComplaint: 'Persistent fatigue and poor sleep for 6 weeks',
        subjective:
            'Patient reports difficulty falling asleep, waking at 3–4 AM, and daytime fatigue affecting her job. Has been under significant work-related stress. Appetite decreased.',
        objective:
            'BP: 104/66, HR: 82 bpm. No pallor or jaundice. Affect flat, speech slow. PHQ-9 score: 14 (moderate depression).',
        assessment: 'Major depressive disorder, moderate',
        plan: 'Sertraline 50mg OD started. Sleep hygiene counseling. Referral to clinical psychologist given. Return in 3 weeks to assess medication response.',
        height: 160,
        weight: 54,
        insuranceId: 'ins_001',
        insuranceAmount: 1500,
        createdAt: new Date('2024-10-22'),
        updatedAt: new Date('2024-10-22'),
    },

    // Ramil Soriano (pat_008) — 4 consultations
    {
        id: 'con_021',
        patientId: 'pat_008',
        consultationDate: new Date('2024-07-15T11:00:00'),
        chiefComplaint: 'Right knee pain and swelling after a fall',
        subjective:
            'Patient slipped on a wet floor at his workplace 2 days ago. Right knee painful and swollen. Cannot fully extend without pain. No prior knee injuries.',
        objective:
            'BP: 128/82, HR: 84 bpm. Right knee: swelling, warmth, tenderness on medial joint line. ROM limited at 15° extension. Anterior drawer test: equivocal.',
        assessment: 'Right knee contusion; medial meniscus injury to be ruled out',
        plan: 'X-ray right knee ordered (no fracture). RICE method. Naproxen 500mg BID x5 days. Referral to orthopedics if no improvement in 1 week. Knee immobilizer provided.',
        height: 168,
        weight: 92,
        insuranceId: 'ins_002',
        insuranceAmount: 2800,
        createdAt: new Date('2024-07-15'),
        updatedAt: new Date('2024-07-15'),
    },
    {
        id: 'con_022',
        patientId: 'pat_008',
        consultationDate: new Date('2024-07-29T10:00:00'),
        chiefComplaint: 'Knee still painful, orthopedics follow-up results',
        subjective:
            'Orthopedic evaluation done. MRI confirmed grade 1 medial collateral ligament sprain, no meniscal tear. Pain improved to 4/10. Can walk but limps.',
        objective:
            'BP: 124/80, HR: 80 bpm. Right knee: swelling decreased. Tenderness localized to MCL. ROM: 5° extension deficit.',
        assessment: 'Grade 1 MCL sprain, right knee — recovering',
        plan: 'Physical therapy referral given. Continue Naproxen PRN. Gradual return to weight bearing. No heavy lifting or squatting for 4 weeks.',
        height: 168,
        weight: 92,
        insuranceId: 'ins_002',
        insuranceAmount: 2800,
        createdAt: new Date('2024-07-29'),
        updatedAt: new Date('2024-07-29'),
    },
    {
        id: 'con_023',
        patientId: 'pat_008',
        consultationDate: new Date('2024-09-11T08:30:00'),
        chiefComplaint: 'Hypertension screening — referred by employer',
        subjective:
            'Patient was flagged at a company health screening with BP 148/96. No symptoms. No prior hypertension diagnosis. Sedentary lifestyle, high-salt diet.',
        objective:
            'BP: 150/94 (repeat 148/92). HR: 78 bpm. Weight: 92kg, BMI: 32.6. No target organ damage signs.',
        assessment: 'Hypertension stage 1, newly diagnosed; obesity',
        plan: 'Lifestyle modification first: DASH diet, salt restriction, daily walking. Recheck BP in 4 weeks. Labs: BMP, lipid panel, urinalysis.',
        height: 168,
        weight: 92,
        insuranceId: 'ins_003',
        insuranceAmount: 2800,
        createdAt: new Date('2024-09-11'),
        updatedAt: new Date('2024-09-11'),
    },
    {
        id: 'con_024',
        patientId: 'pat_008',
        consultationDate: new Date('2024-10-10T09:00:00'),
        chiefComplaint: 'Hypertension follow-up',
        subjective:
            'Patient attempted dietary changes but struggles with consistency. Home BP readings: 140–150/90–96. Lab results reviewed.',
        objective:
            'BP: 146/92 today. HR: 76 bpm. Creatinine: 0.95 mg/dL. LDL: 148 mg/dL. Urinalysis: normal.',
        assessment:
            'Hypertension stage 1 — not controlled with lifestyle modification alone; dyslipidemia',
        plan: 'Losartan 50mg OD started. Atorvastatin 20mg OD for dyslipidemia. Dietitian referral. Follow up in 4 weeks with BP diary.',
        height: 168,
        weight: 91,
        insuranceId: 'ins_003',
        insuranceAmount: 2800,
        createdAt: new Date('2024-10-10'),
        updatedAt: new Date('2024-10-10'),
    },

    // Marites Flores (pat_009) — 3 consultations
    {
        id: 'con_025',
        patientId: 'pat_009',
        consultationDate: new Date('2024-08-28T10:00:00'),
        chiefComplaint: 'Joint pain in hands and morning stiffness for 2 months',
        subjective:
            'Patient reports symmetric pain and swelling in the small joints of both hands and wrists. Morning stiffness lasting >1 hour. Fatigue and occasional low-grade fever. No prior diagnosis.',
        objective:
            'BP: 118/76, HR: 86 bpm. Joints: PIP and MCP joints bilateral — swelling, warmth, tenderness. No deformities yet. Wrist ROM restricted.',
        assessment: 'Clinical suspicion for rheumatoid arthritis',
        plan: 'Labs ordered: RF, anti-CCP, ESR, CRP, CBC, ANA. Naproxen 500mg BID for pain relief. Urgent referral to rheumatology. Return with results.',
        height: 157,
        weight: 60,
        insuranceId: 'ins_001',
        insuranceAmount: 2000,
        createdAt: new Date('2024-08-28'),
        updatedAt: new Date('2024-08-28'),
    },
    {
        id: 'con_026',
        patientId: 'pat_009',
        consultationDate: new Date('2024-09-16T09:00:00'),
        chiefComplaint: 'Lab results for joint pain workup',
        subjective:
            'Joint pain persisting. Morning stiffness duration slightly shortened (45 minutes). Awaiting rheumatology appointment.',
        objective:
            'BP: 120/78, HR: 84 bpm. RF: positive (1:320). Anti-CCP: elevated. ESR: 68 mm/hr. CRP: 24 mg/L. CBC: mild normocytic anemia.',
        assessment: 'Seropositive rheumatoid arthritis — confirmed',
        plan: 'Continue Naproxen. Expedited rheumatology referral with lab results forwarded. Educate on joint protection techniques. Folic acid 5mg OD started in preparation for possible DMARD therapy.',
        height: 157,
        weight: 60,
        insuranceId: 'ins_003',
        insuranceAmount: 2000,
        createdAt: new Date('2024-09-16'),
        updatedAt: new Date('2024-09-16'),
    },
    {
        id: 'con_027',
        patientId: 'pat_009',
        consultationDate: new Date('2024-10-28T11:00:00'),
        chiefComplaint: 'Post-rheumatology visit follow-up',
        subjective:
            'Rheumatologist started Methotrexate 10mg weekly + Hydroxychloroquine 200mg BID. Patient tolerating well so far. Morning stiffness down to 30 minutes.',
        objective:
            'BP: 116/74, HR: 80 bpm. Hand joints: swelling slightly reduced. Grip strength improved bilaterally.',
        assessment: 'Rheumatoid arthritis — early response to DMARD therapy',
        plan: 'Continue current regimen as directed by rheumatologist. Monitor for MTX side effects: CBC and LFTs monthly. No NSAIDs needed — taper off Naproxen. Follow up in 6 weeks.',
        height: 157,
        weight: 59,
        insuranceId: 'ins_002',
        insuranceAmount: 2000,
        createdAt: new Date('2024-10-28'),
        updatedAt: new Date('2024-10-28'),
    },

    // Julius Cabrera (pat_010) — 3 consultations
    {
        id: 'con_028',
        patientId: 'pat_010',
        consultationDate: new Date('2024-10-02T08:00:00'),
        chiefComplaint: 'Fever and sore throat for 4 days',
        subjective:
            'Patient (16 y/o) reports high fever up to 39.5°C, severe sore throat, difficulty swallowing, and neck pain. No cough. Brought in by father.',
        objective:
            'Temp: 39.2°C, BP: 108/68, HR: 102 bpm. Pharynx: erythematous with bilateral tonsillar exudate. Anterior cervical lymphadenopathy. Centor score: 4.',
        assessment: 'Exudative tonsillitis — likely Group A Streptococcal pharyngitis',
        plan: 'Rapid strep test done — positive. Amoxicillin 500mg TID x10 days. Paracetamol 500mg TID PRN fever. Soft diet and increased fluid intake. Return if no improvement in 48 hours.',
        height: 170,
        weight: 61,
        insuranceId: 'ins_002',
        insuranceAmount: 1000,
        createdAt: new Date('2024-10-02'),
        updatedAt: new Date('2024-10-02'),
    },
    {
        id: 'con_029',
        patientId: 'pat_010',
        consultationDate: new Date('2024-10-07T09:30:00'),
        chiefComplaint: 'Follow-up for strep throat, swelling in neck',
        subjective:
            'Fever resolved after 2 days of antibiotics. Throat pain improved but patient now notes a tender, swollen area on the right side of his neck increasing in size over 2 days.',
        objective:
            'Temp: 37.4°C, BP: 110/70, HR: 88 bpm. Right peritonsillar area: bulging, uvular deviation to the left noted. Muffled voice. Trismus mild.',
        assessment: 'Peritonsillar abscess, right — complication of streptococcal tonsillitis',
        plan: 'Referred to ENT urgently for aspiration or incision and drainage. Continue antibiotics, switched to Clindamycin 300mg TID. Advised ER referral if airway compromise suspected.',
        height: 170,
        weight: 61,
        insuranceId: 'ins_003',
        insuranceAmount: 1000,
        createdAt: new Date('2024-10-07'),
        updatedAt: new Date('2024-10-07'),
    },
    {
        id: 'con_030',
        patientId: 'pat_010',
        consultationDate: new Date('2024-10-21T10:00:00'),
        chiefComplaint: 'Post-ENT procedure follow-up',
        subjective:
            'ENT performed needle aspiration. Patient recovered well. Completed Clindamycin course. No recurrence of swelling. Back in school.',
        objective:
            'Temp: 36.6°C, BP: 112/70, HR: 76 bpm. Oropharynx: no bulging or asymmetry. Tonsils: mildly enlarged but no exudate. Neck lymph nodes: residual mild bilateral enlargement.',
        assessment:
            'Resolved peritonsillar abscess. Recurrent tonsillitis — tonsillectomy discussion warranted.',
        plan: 'ENT follow-up for tonsillectomy evaluation given 2 episodes this year. Gargle warm salt water. Return if fever or throat pain recurs. Educate parent on warning signs.',
        height: 170,
        weight: 62,
        insuranceId: 'ins_002',
        insuranceAmount: 1000,
        createdAt: new Date('2024-10-21'),
        updatedAt: new Date('2024-10-21'),
    },
];

export const mockDiagnosis: DiagnosisType[] = [
    { id: '550e8400-e29b-41d4-a716-446655440001', name: 'Hypertension' },
    { id: '550e8400-e29b-41d4-a716-446655440002', name: 'Type 2 Diabetes Mellitus' },
    { id: '550e8400-e29b-41d4-a716-446655440003', name: 'Acute Bronchitis' },
    { id: '550e8400-e29b-41d4-a716-446655440004', name: 'Major Depressive Disorder' },
    { id: '550e8400-e29b-41d4-a716-446655440005', name: 'Gastroesophageal Reflux Disease (GERD)' },
    { id: '550e8400-e29b-41d4-a716-446655440006', name: 'Chronic Kidney Disease' },
    { id: '550e8400-e29b-41d4-a716-446655440007', name: 'Asthma' },
    { id: '550e8400-e29b-41d4-a716-446655440008', name: 'Urinary Tract Infection' },
    { id: '550e8400-e29b-41d4-a716-446655440009', name: 'Osteoarthritis' },
    { id: '550e8400-e29b-41d4-a716-446655440010', name: 'Anemia' },
];
