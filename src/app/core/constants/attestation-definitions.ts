import {AttestationDefinition} from "@core/models/attestation/AttestationDefinition";
import {AttestationType} from "@core/models/attestation/AttestationType";

// `name`/`attribute` below are i18n KEYS (see src/assets/i18n/{de,en}.json's
// "attestations" section), not literal display text any more - every
// template/component that renders them does so through the `translate`
// pipe/directive (see e.g. recursive-checkbox.component.html). Keyed by
// attestation type + claim identifier (attestations.<type>.<identifier>,
// attestations.<type>._name for the credential-level name) rather than one
// shared key per identifier, since the same identifier's display text isn't
// always identical across types (e.g. the Diploma's "Family Name(s)" vs
// every other type's plain "Family name").

export const PID_ATTESTATION: AttestationDefinition = {
  name: "attestations.pid._name",
  type: AttestationType.PID,
  dataSet: [
    { identifier: 'family_name', attribute: 'attestations.pid.family_name'},
    { identifier: 'given_name', attribute: 'attestations.pid.given_name'},
    { identifier: 'birth_date', attribute: 'attestations.pid.birth_date'},
    { identifier: 'family_name_birth', attribute: 'attestations.pid.family_name_birth'},
    { identifier: 'given_name_birth', attribute: 'attestations.pid.given_name_birth'},
    { identifier: 'place_of_birth', attribute: 'attestations.pid.place_of_birth'},
    { identifier: 'resident_address', attribute: 'attestations.pid.resident_address'},
    { identifier: 'resident_country', attribute: 'attestations.pid.resident_country'},
    { identifier: 'resident_state', attribute: 'attestations.pid.resident_state'},
    { identifier: 'resident_city', attribute: 'attestations.pid.resident_city'},
    { identifier: 'resident_postal_code', attribute: 'attestations.pid.resident_postal_code'},
    { identifier: 'resident_street', attribute: 'attestations.pid.resident_street'},
    { identifier: 'resident_house_number', attribute: 'attestations.pid.resident_house_number'},
    { identifier: 'sex', attribute: 'attestations.pid.sex'},
    { identifier: 'nationality', attribute: 'attestations.pid.nationality'},
    { identifier: 'issuance_date', attribute: 'attestations.pid.issuance_date'},
    { identifier: 'expiry_date', attribute: 'attestations.pid.expiry_date'},
    { identifier: 'issuing_authority', attribute: 'attestations.pid.issuing_authority'},
    { identifier: 'document_number', attribute: 'attestations.pid.document_number'},
    { identifier: 'personal_administrative_number', attribute: 'attestations.pid.personal_administrative_number'},
    { identifier: 'issuing_country', attribute: 'attestations.pid.issuing_country'},
    { identifier: 'issuing_jurisdiction', attribute: 'attestations.pid.issuing_jurisdiction'},
    { identifier: 'portrait', attribute: 'attestations.pid.portrait'},
    { identifier: 'email_address', attribute: 'attestations.pid.email_address'},
    { identifier: 'mobile_phone_number', attribute: 'attestations.pid.mobile_phone_number'},
    { identifier: 'trust_anchor', attribute: 'attestations.pid.trust_anchor'},
  ]
}

export const MDL_ATTESTATION: AttestationDefinition = {
  name: "attestations.mdl._name",
  type: AttestationType.MDL,
  dataSet: [
    { identifier: 'family_name', attribute: 'attestations.mdl.family_name' },
    { identifier: 'given_name', attribute: 'attestations.mdl.given_name'},
    { identifier: 'birth_date', attribute: 'attestations.mdl.birth_date'},
    { identifier: 'issue_date', attribute: 'attestations.mdl.issue_date'},
    { identifier: 'expiry_date', attribute: 'attestations.mdl.expiry_date'},
    { identifier: 'age_over_18', attribute: 'attestations.mdl.age_over_18'},
    { identifier: 'age_over_21', attribute: 'attestations.mdl.age_over_21'},
    { identifier: 'age_in_years', attribute: 'attestations.mdl.age_in_years'},
    { identifier: 'age_birth_year', attribute: 'attestations.mdl.age_birth_year'},
    { identifier: 'issuing_country', attribute: 'attestations.mdl.issuing_country'},
    { identifier: 'issuing_jurisdiction', attribute: 'attestations.mdl.issuing_jurisdiction'},
    { identifier: 'issuing_authority', attribute: 'attestations.mdl.issuing_authority'},
    { identifier: 'document_number', attribute: 'attestations.mdl.document_number'},
    { identifier: 'portrait', attribute: 'attestations.mdl.portrait'},
    { identifier: 'driving_privileges', attribute: 'attestations.mdl.driving_privileges'},
    { identifier: 'un_distinguishing_sign', attribute: 'attestations.mdl.un_distinguishing_sign'},
    { identifier: 'administrative_number', attribute: 'attestations.mdl.administrative_number'},
    { identifier: 'sex', attribute: 'attestations.mdl.sex'},
    { identifier: 'height', attribute: 'attestations.mdl.height'},
    { identifier: 'weight', attribute: 'attestations.mdl.weight'},
    { identifier: 'eye_colour', attribute: 'attestations.mdl.eye_colour'},
    { identifier: 'hair_colour', attribute: 'attestations.mdl.hair_colour'},
    { identifier: 'birth_place', attribute: 'attestations.mdl.birth_place'},
    { identifier: 'resident_address', attribute: 'attestations.mdl.resident_address'},
    { identifier: 'portrait_capture_date', attribute: 'attestations.mdl.portrait_capture_date'},
    { identifier: 'nationality', attribute: 'attestations.mdl.nationality'},
    { identifier: 'resident_city', attribute: 'attestations.mdl.resident_city'},
    { identifier: 'resident_state', attribute: 'attestations.mdl.resident_state'},
    { identifier: 'resident_postal_code', attribute: 'attestations.mdl.resident_postal_code'},
    { identifier: 'resident_country', attribute: 'attestations.mdl.resident_country'},
    { identifier: 'family_name_national_character', attribute: 'attestations.mdl.family_name_national_character'},
    { identifier: 'given_name_national_character', attribute: 'attestations.mdl.given_name_national_character'},
    { identifier: 'signature_usual_mark', attribute: 'attestations.mdl.signature_usual_mark'}
  ]
}

export const EHIC_ATTESTATION: AttestationDefinition = {
  name: "attestations.ehic._name",
  type: AttestationType.EHIC,
  dataSet: [
    { identifier: "credential_holder", attribute: "attestations.ehic.credential_holder" },
    { identifier: "subject", attribute: "attestations.ehic.subject" },
    { identifier: 'social_security_pin', attribute: 'attestations.ehic.social_security_pin'},
    { identifier: "starting_date", attribute: "attestations.ehic.starting_date" },
    { identifier: "ending_date", attribute: "attestations.ehic.ending_date" },
    { identifier: 'document_id', attribute: 'attestations.ehic.document_id' },
    { identifier: "competent_institution", attribute: 'attestations.ehic.competent_institution' }
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
  name: "attestations.learning_credential._name",
  type: AttestationType.LEARNING_CREDENTIAL,
  dataSet: [
    {identifier: "issuing_authority", attribute: "attestations.learning_credential.issuing_authority", selectivelyDisclosable: "never"},
    {identifier: "issuing_country", attribute: "attestations.learning_credential.issuing_country", selectivelyDisclosable: "never"},
    {identifier: "date_of_issuance", attribute: "attestations.learning_credential.date_of_issuance", selectivelyDisclosable: "never"},
    //{identifier: 'date_of_expiry', attribute: "Date of Expiry", selectivelyDisclosable: "never"},
    {identifier: "family_name", attribute: "attestations.learning_credential.family_name"},
    {identifier: "given_name", attribute: "attestations.learning_credential.given_name"},
    {identifier: "achievement_title", attribute: "attestations.learning_credential.achievement_title", selectivelyDisclosable: "never"},
    //{identifier: "achievement_description", attribute: "Achievement Description", selectivelyDisclosable: "never"},
    {identifier: "learning_outcomes", attribute: "attestations.learning_credential.learning_outcomes"},
    {identifier: "assessment_grade", attribute: "attestations.learning_credential.assessment_grade"},
    {identifier: "language_of_classes", attribute: "attestations.learning_credential.language_of_classes", selectivelyDisclosable: "never"},
    {identifier: "learner_identification", attribute: "attestations.learning_credential.learner_identification"},
    {identifier: "expected_study_time", attribute: "attestations.learning_credential.expected_study_time"},
    {identifier: "level_of_learning_experience", attribute: "attestations.learning_credential.level_of_learning_experience"},
    {identifier: "types_of_quality_assurance", attribute: "attestations.learning_credential.types_of_quality_assurance"},
    {identifier: "prerequisites_to_enroll", attribute: "attestations.learning_credential.prerequisites_to_enroll"},
    {identifier: "integration_stackability_options", attribute: "attestations.learning_credential.integration_stackability_options"},
  ]
}

// The following three match eudi-srv-pid-issuer's custom demo credentials
// exactly (same vct + claim names as its ResidencePermitClaims.kt /
// SdJwtVcSchufaClaims.kt / SdJwtVcArbeitsvertragClaims.kt) - added so this
// app can request everything the issuer can actually issue, not just the
// generic EU reference set (PID/mDL/EHIC/Diploma) this app originally shipped
// with.

export const RESIDENCE_PERMIT_ATTESTATION: AttestationDefinition = {
  name: "attestations.residence_permit._name",
  type: AttestationType.RESIDENCE_PERMIT,
  dataSet: [
    { identifier: 'family_name', attribute: 'attestations.residence_permit.family_name' },
    { identifier: 'given_name', attribute: 'attestations.residence_permit.given_name' },
    { identifier: 'birth_date', attribute: 'attestations.residence_permit.birth_date' },
    { identifier: 'nationality', attribute: 'attestations.residence_permit.nationality' },
    { identifier: 'document_number', attribute: 'attestations.residence_permit.document_number' },
    { identifier: 'administrative_number', attribute: 'attestations.residence_permit.administrative_number' },
    { identifier: 'issuing_authority', attribute: 'attestations.residence_permit.issuing_authority' },
    { identifier: 'issuing_country', attribute: 'attestations.residence_permit.issuing_country' },
    { identifier: 'date_of_issuance', attribute: 'attestations.residence_permit.date_of_issuance' },
    { identifier: 'date_of_expiry', attribute: 'attestations.residence_permit.date_of_expiry' },
    { identifier: 'resident_address', attribute: 'attestations.residence_permit.resident_address' },
  ]
}

export const SCHUFA_ATTESTATION: AttestationDefinition = {
  name: "attestations.schufa._name",
  type: AttestationType.SCHUFA,
  dataSet: [
    { identifier: 'family_name', attribute: 'attestations.schufa.family_name' },
    { identifier: 'given_name', attribute: 'attestations.schufa.given_name' },
    { identifier: 'birth_date', attribute: 'attestations.schufa.birth_date' },
    { identifier: 'credit_score', attribute: 'attestations.schufa.credit_score' },
    { identifier: 'report_date', attribute: 'attestations.schufa.report_date' },
    { identifier: 'valid_until', attribute: 'attestations.schufa.valid_until' },
    { identifier: 'issuing_entity', attribute: 'attestations.schufa.issuing_entity' },
  ]
}

export const ARBEITSVERTRAG_ATTESTATION: AttestationDefinition = {
  name: "attestations.arbeitsvertrag._name",
  type: AttestationType.ARBEITSVERTRAG,
  dataSet: [
    { identifier: 'employee_family_name', attribute: 'attestations.arbeitsvertrag.employee_family_name' },
    { identifier: 'employee_given_name', attribute: 'attestations.arbeitsvertrag.employee_given_name' },
    { identifier: 'job_title', attribute: 'attestations.arbeitsvertrag.job_title' },
    { identifier: 'employment_start_date', attribute: 'attestations.arbeitsvertrag.employment_start_date' },
    { identifier: 'employer', attribute: 'attestations.arbeitsvertrag.employer' },
    { identifier: 'contract_type', attribute: 'attestations.arbeitsvertrag.contract_type' },
    { identifier: 'department', attribute: 'attestations.arbeitsvertrag.department' },
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
