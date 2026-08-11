import {AttestationDefinition} from "@core/models/attestation/AttestationDefinition";
import {AttestationType} from "@core/models/attestation/AttestationType";

export const PID_ATTESTATION: AttestationDefinition = {
  name: "Person Identification Data (PID)",
  type: AttestationType.PID,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name'},
    { identifier: 'given_name', attribute: 'Given name'},
    { identifier: 'birth_date', attribute: 'Birthdate'},
    { identifier: 'family_name_birth', attribute: 'Family name birth'},
    { identifier: 'given_name_birth', attribute: 'Given name birth'},
    { identifier: 'place_of_birth', attribute: 'Birth place'},
    { identifier: 'resident_address', attribute: 'Resident address'},
    { identifier: 'resident_country', attribute: 'Resident country'},
    { identifier: 'resident_state', attribute: 'Resident state'},
    { identifier: 'resident_city', attribute: 'Resident city'},
    { identifier: 'resident_postal_code', attribute: 'Resident postal code'},
    { identifier: 'resident_street', attribute: 'Resident street'},
    { identifier: 'resident_house_number', attribute: 'Resident house number'},
    { identifier: 'sex', attribute: 'Sex'},
    { identifier: 'nationality', attribute: 'Nationality'},
    { identifier: 'issuance_date', attribute: 'Issuance date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'issuing_authority', attribute: 'Issuing authority'},
    { identifier: 'document_number', attribute: 'Document number'},
    { identifier: 'personal_administrative_number', attribute: 'Personal administrative number'},
    { identifier: 'issuing_country', attribute: 'Issuing country'},
    { identifier: 'issuing_jurisdiction', attribute: 'Issuing jurisdiction'},
    { identifier: 'portrait', attribute: 'Portrait'},
    { identifier: 'email_address', attribute: 'Email address'},
    { identifier: 'mobile_phone_number', attribute: 'Mobile phone number'},
    { identifier: 'trust_anchor', attribute: 'Trust anchor'},
  ]
}

export const MDL_ATTESTATION: AttestationDefinition = {
  name: "Mobile Driving Licence (MDL)",
  type: AttestationType.MDL,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name' },
    { identifier: 'given_name', attribute: 'Given name'},
    { identifier: 'birth_date', attribute: 'Birthdate'},
    { identifier: 'issue_date', attribute: 'Issue date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'age_over_18', attribute: 'Age over 18'},
    { identifier: 'age_over_21', attribute: 'Age over 21'},
    { identifier: 'age_in_years', attribute: 'Age in years'},
    { identifier: 'age_birth_year', attribute: 'Age birth year'},
    { identifier: 'issuing_country', attribute: 'Issuing country'},
    { identifier: 'issuing_jurisdiction', attribute: 'Issuing jurisdiction'},
    { identifier: 'issuing_authority', attribute: 'Issuing authority'},
    { identifier: 'document_number', attribute: 'Document number'},
    { identifier: 'portrait', attribute: 'Portrait'},
    { identifier: 'driving_privileges', attribute: 'Driving privileges'},
    { identifier: 'un_distinguishing_sign', attribute: 'Un-distinguishing sign'},
    { identifier: 'administrative_number', attribute: 'Administrative number'},
    { identifier: 'sex', attribute: 'Sex'},
    { identifier: 'height', attribute: 'Height'},
    { identifier: 'weight', attribute: 'Weight'},
    { identifier: 'eye_colour', attribute: 'Eye colour'},
    { identifier: 'hair_colour', attribute: 'Hair colour'},
    { identifier: 'birth_place', attribute: 'Birth place'},
    { identifier: 'resident_address', attribute: 'Resident address'},
    { identifier: 'portrait_capture_date', attribute: 'Portrait capture date'},
    { identifier: 'nationality', attribute: 'Nationality'},
    { identifier: 'resident_city', attribute: 'Resident city'},
    { identifier: 'resident_state', attribute: 'Resident state'},
    { identifier: 'resident_postal_code', attribute: 'Resident postal code'},
    { identifier: 'resident_country', attribute: 'Resident country'},
    { identifier: 'family_name_national_character', attribute: 'Family name national character'},
    { identifier: 'given_name_national_character', attribute: 'Given name national character'},
    { identifier: 'signature_usual_mark', attribute: 'Signature usual mark'}
  ]
}

export const EHIC_ATTESTATION: AttestationDefinition = {
  name: "European Health Insurance Card (EHIC)",
  type: AttestationType.EHIC,
  dataSet: [
    { identifier: "credential_holder", attribute: "Credential holder" },
    { identifier: "subject", attribute: "Subject" },
    { identifier: 'social_security_pin', attribute: 'Social security PIN'},
    { identifier: "starting_date", attribute: "Starting date" },
    { identifier: "ending_date", attribute: "Ending date" },
    { identifier: 'document_id', attribute: 'Document identifier' },
    { identifier: "competent_institution", attribute: 'Competent institution' }
  ],
}

// Labeled "Diploma" (not the more general "Learning Credential" this type is
// named for internally, see AttestationType.LEARNING_CREDENTIAL and its
// special-cased claim-path handling in attestations-per-format.ts) to match
// exactly what the issuer app calls this same credential (same vct,
// urn:eu.europa.ec.eudi:learning:credential:1) in its own card picker - a
// demo user going issuer -> wallet -> verifier should see one consistent
// name for one credential, not two.
export const LEARNING_CREDENTIAL_ATTESTATION: AttestationDefinition = {
  name: "Diploma",
  type: AttestationType.LEARNING_CREDENTIAL,
  dataSet: [
    {identifier: "issuing_authority", attribute: "Issuing Authority", selectivelyDisclosable: "never"},
    {identifier: "issuing_country", attribute: "Issuing Country", selectivelyDisclosable: "never"},
    {identifier: "date_of_issuance", attribute: "Date of Issuance", selectivelyDisclosable: "never"},
    //{identifier: 'date_of_expiry', attribute: "Date of Expiry", selectivelyDisclosable: "never"},
    {identifier: "family_name", attribute: "Family Name(s)"},
    {identifier: "given_name", attribute: "Given Name(s)"},
    {identifier: "achievement_title", attribute: "Achievement Title", selectivelyDisclosable: "never"},
    //{identifier: "achievement_description", attribute: "Achievement Description", selectivelyDisclosable: "never"},
    {identifier: "learning_outcomes", attribute: "Learning Outcomes"},
    {identifier: "assessment_grade", attribute: "Assessment Grade"},
    {identifier: "language_of_classes", attribute: "Language of classes", selectivelyDisclosable: "never"},
    {identifier: "learner_identification", attribute: "Learner identification"},
    {identifier: "expected_study_time", attribute: "Expected study time"},
    {identifier: "level_of_learning_experience", attribute: "Level of learning experience"},
    {identifier: "types_of_quality_assurance", attribute: "Types of quality assurance"},
    {identifier: "prerequisites_to_enroll", attribute: "Prerequisites to enroll"},
    {identifier: "integration_stackability_options", attribute: "Integration or Stackability options"},
  ]
}

// The following three match eudi-srv-pid-issuer's custom demo credentials
// exactly (same vct + claim names as its ResidencePermitClaims.kt /
// SdJwtVcSchufaClaims.kt / SdJwtVcArbeitsvertragClaims.kt) - added so this
// app can request everything the issuer can actually issue, not just the
// generic EU reference set (PID/mDL/EHIC/Diploma) this app originally shipped
// with.

export const RESIDENCE_PERMIT_ATTESTATION: AttestationDefinition = {
  name: "Residence Permit",
  type: AttestationType.RESIDENCE_PERMIT,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name' },
    { identifier: 'given_name', attribute: 'Given name' },
    { identifier: 'birth_date', attribute: 'Birthdate' },
    { identifier: 'nationality', attribute: 'Nationality' },
    { identifier: 'document_number', attribute: 'Document number' },
    { identifier: 'administrative_number', attribute: 'Administrative number' },
    { identifier: 'issuing_authority', attribute: 'Issuing authority' },
    { identifier: 'issuing_country', attribute: 'Issuing country' },
    { identifier: 'date_of_issuance', attribute: 'Date of issuance' },
    { identifier: 'date_of_expiry', attribute: 'Date of expiry' },
    { identifier: 'resident_address', attribute: 'Resident address' },
  ]
}

export const SCHUFA_ATTESTATION: AttestationDefinition = {
  name: "Schufa Credit Report",
  type: AttestationType.SCHUFA,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name' },
    { identifier: 'given_name', attribute: 'Given name' },
    { identifier: 'birth_date', attribute: 'Birthdate' },
    { identifier: 'credit_score', attribute: 'Credit score' },
    { identifier: 'report_date', attribute: 'Report date' },
    { identifier: 'valid_until', attribute: 'Valid until' },
    { identifier: 'issuing_entity', attribute: 'Issuing entity' },
  ]
}

export const ARBEITSVERTRAG_ATTESTATION: AttestationDefinition = {
  name: "Employment Certificate (TRUSTEQ)",
  type: AttestationType.ARBEITSVERTRAG,
  dataSet: [
    { identifier: 'employee_family_name', attribute: 'Employee family name' },
    { identifier: 'employee_given_name', attribute: 'Employee given name' },
    { identifier: 'job_title', attribute: 'Job title' },
    { identifier: 'employment_start_date', attribute: 'Employment start date' },
    { identifier: 'employer', attribute: 'Employer' },
    { identifier: 'contract_type', attribute: 'Contract type' },
    { identifier: 'department', attribute: 'Department' },
  ]
}

// Order matches the issuer's own credential-card picker exactly (see its
// generate-credentials-offer-form.html), so the two apps' card grids read as
// the same menu, not two different ones.
export const SUPPORTED_ATTESTATIONS: { [id: string]: AttestationDefinition } = {
  "pid": PID_ATTESTATION,
  "mdl": MDL_ATTESTATION,
  "learning_credential": LEARNING_CREDENTIAL_ATTESTATION,
  "ehic": EHIC_ATTESTATION,
  "residence_permit": RESIDENCE_PERMIT_ATTESTATION,
  "schufa": SCHUFA_ATTESTATION,
  "arbeitsvertrag": ARBEITSVERTRAG_ATTESTATION,
}
