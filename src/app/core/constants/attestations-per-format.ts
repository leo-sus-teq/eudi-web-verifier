import {Attestation, MsoMdocAttestation, SdJwtVcAttestation} from "@core/models/attestation/Attestations";
import {ARBEITSVERTRAG_ATTESTATION, EHIC_ATTESTATION, MDL_ATTESTATION, PID_ATTESTATION, LEARNING_CREDENTIAL_ATTESTATION, RESIDENCE_PERMIT_ATTESTATION, SCHUFA_ATTESTATION} from "@core/constants/attestation-definitions";
import {AttestationFormat} from "@core/models/attestation/AttestationFormat";
import {AttestationType} from "@core/models/attestation/AttestationType";
import {DataElement} from "@core/models/attestation/AttestationDefinition";
import { ClaimsQuery } from "../models/dcql/DCQL";

export const SUPPORTED_FORMATS: AttestationFormat[] = [
  AttestationFormat.MSO_MDOC,
  AttestationFormat.SD_JWT_VC
]

/*---- MDL ATTESTATION INSTANCES PER FORMAT ----*/
export const MDL_MSO_MDOC: MsoMdocAttestation = {
  format: AttestationFormat.MSO_MDOC,
  attestationDef: MDL_ATTESTATION,
  doctype: 'org.iso.18013.5.1.mDL',
  namespace: 'org.iso.18013.5.1',
  claimQuery: (attribute: DataElement) => { return msoMdocClaimQuery('org.iso.18013.5.1', attribute.identifier) }
}

/*---- PID ATTESTATION INSTANCES PER FORMAT ----*/
export const PID_MSO_MDOC: MsoMdocAttestation = {
  format: AttestationFormat.MSO_MDOC,
  attestationDef: PID_ATTESTATION,
  doctype: 'eu.europa.ec.eudi.pid.1',
  namespace: 'eu.europa.ec.eudi.pid.1',
  claimQuery: (attribute: DataElement) => { return msoMdocClaimQuery('eu.europa.ec.eudi.pid.1', attribute.identifier) }
}
export const PID_SD_JWT_VC: SdJwtVcAttestation = {
  format: AttestationFormat.SD_JWT_VC,
  vct: "urn:eudi:pid:1",
  attestationDef: PID_ATTESTATION,
  claimQuery: (attribute: DataElement) => { return { path: sdJwtVcAttributeClaimQuery(attribute, AttestationType.PID) } }
}

/*---- EHIC INSTANCES PER FORMAT ----*/
export const EHIC_MSO_MDOC: MsoMdocAttestation = {
  format: AttestationFormat.MSO_MDOC,
  attestationDef: EHIC_ATTESTATION,
  doctype: 'eu.europa.ec.eudi.ehic.1',
  namespace: 'eu.europa.ec.eudi.ehic.1',
  claimQuery: (attribute: DataElement) => { return msoMdocClaimQuery('eu.europa.ec.eudi.ehic.1', attribute.identifier) }
}
export const EHIC_SD_JWT_VC: SdJwtVcAttestation = {
  format: AttestationFormat.SD_JWT_VC,
  attestationDef: EHIC_ATTESTATION,
  vct: 'urn:eu.europa.ec.eudi:ehic:1',
  claimQuery: (attribute: DataElement) => { return { path: sdJwtVcAttributeClaimQuery(attribute, AttestationType.EHIC) } }
}

/*---- LEARNING CREDENTIAL ("Diploma") INSTANCES PER FORMAT ----*/
export const LEARNING_CREDENTIAL_SD_JWT_VC: SdJwtVcAttestation = {
  format: AttestationFormat.SD_JWT_VC,
  attestationDef: LEARNING_CREDENTIAL_ATTESTATION,
  vct: "urn:eu.europa.ec.eudi:learning:credential:1",
  claimQuery: (attribute: DataElement) => { return { path: sdJwtVcAttributeClaimQuery(attribute, AttestationType.LEARNING_CREDENTIAL) } }
}

/*---- RESIDENCE PERMIT INSTANCES PER FORMAT ----*/
// SD-JWT VC only: the issuer app doesn't offer an mdoc variant for this one
// (see its generate-credentials-offer-form.html - only two checkboxes,
// no format switch, unlike Schufa/Arbeitsvertrag below).
export const RESIDENCE_PERMIT_SD_JWT_VC: SdJwtVcAttestation = {
  format: AttestationFormat.SD_JWT_VC,
  attestationDef: RESIDENCE_PERMIT_ATTESTATION,
  vct: "urn:eudi:residence.permit:1",
  claimQuery: (attribute: DataElement) => { return { path: sdJwtVcAttributeClaimQuery(attribute, AttestationType.RESIDENCE_PERMIT) } }
}

/*---- SCHUFA CREDIT REPORT INSTANCES PER FORMAT ----*/
export const SCHUFA_MSO_MDOC: MsoMdocAttestation = {
  format: AttestationFormat.MSO_MDOC,
  attestationDef: SCHUFA_ATTESTATION,
  doctype: 'eudi.schufa.1',
  namespace: 'eudi.schufa.1',
  claimQuery: (attribute: DataElement) => { return msoMdocClaimQuery('eudi.schufa.1', attribute.identifier) }
}
export const SCHUFA_SD_JWT_VC: SdJwtVcAttestation = {
  format: AttestationFormat.SD_JWT_VC,
  attestationDef: SCHUFA_ATTESTATION,
  vct: "urn:eudi:schufa:1",
  claimQuery: (attribute: DataElement) => { return { path: sdJwtVcAttributeClaimQuery(attribute, AttestationType.SCHUFA) } }
}

/*---- EMPLOYMENT CERTIFICATE (ARBEITSVERTRAG) INSTANCES PER FORMAT ----*/
export const ARBEITSVERTRAG_MSO_MDOC: MsoMdocAttestation = {
  format: AttestationFormat.MSO_MDOC,
  attestationDef: ARBEITSVERTRAG_ATTESTATION,
  doctype: 'eudi.trusteq.arbeitsvertrag.1',
  namespace: 'eudi.trusteq.arbeitsvertrag.1',
  claimQuery: (attribute: DataElement) => { return msoMdocClaimQuery('eudi.trusteq.arbeitsvertrag.1', attribute.identifier) }
}
export const ARBEITSVERTRAG_SD_JWT_VC: SdJwtVcAttestation = {
  format: AttestationFormat.SD_JWT_VC,
  attestationDef: ARBEITSVERTRAG_ATTESTATION,
  vct: "urn:eudi:trusteq.arbeitsvertrag:1",
  claimQuery: (attribute: DataElement) => { return { path: sdJwtVcAttributeClaimQuery(attribute, AttestationType.ARBEITSVERTRAG) } }
}

function resolveAttribute(attribute: DataElement, attestationType: AttestationType): string {
  let resolvedAttribute = attribute.identifier
  if (attestationType === AttestationType.PID) {
    let mappedAttribute = PID_SD_JWT_VC_ATTRIBUTE_MAP[attribute.identifier];
    resolvedAttribute = mappedAttribute || attribute.identifier;
  }

  return resolvedAttribute;
}

function sdJwtVcAttributeClaimQuery(attribute: DataElement, attestationType: AttestationType): (string | null)[] {
  let resolvedAttribute = resolveAttribute(attribute, attestationType);

  if (attestationType === AttestationType.PID && resolvedAttribute === 'nationalities') {
    return ['nationalities', null];
  } else if (attestationType === AttestationType.LEARNING_CREDENTIAL && resolvedAttribute === "learning_outcomes") {
    return ["learning_outcomes", null];
  } else if (attestationType === AttestationType.LEARNING_CREDENTIAL && resolvedAttribute === "language_of_classes") {
    return ["language_of_classes", null];
  } else if (attestationType === AttestationType.LEARNING_CREDENTIAL && resolvedAttribute === "types_of_quality_assurance") {
    return ["types_of_quality_assurance", null];
  } else if (attestationType === AttestationType.LEARNING_CREDENTIAL && resolvedAttribute === "prerequisites_to_enroll") {
    return ["prerequisites_to_enroll", null];
  } else {
    return resolvedAttribute.split('.');
  }
}

function msoMdocClaimQuery(namespace: string, claimName: string): ClaimsQuery {
  return { path: [namespace, claimName], intent_to_retain: false }
}

export const PID_SD_JWT_VC_ATTRIBUTE_MAP: { [id: string]: string } = {
  "birth_date": "birthdate",
  "family_name_birth": "birth_family_name",
  "given_name_birth": "birth_given_name",
  "place_of_birth": "place_of_birth.locality",
  "resident_address": "address.formatted",
  "resident_country": "address.country",
  "resident_state": "address.region",
  "resident_city": "address.locality",
  "resident_postal_code": "address.postal_code",
  "resident_street": "address.street_address",
  "resident_house_number": "address.house_number",
  "nationality": "nationalities",
  "issuance_date": "date_of_issuance",
  "expiry_date": "date_of_expiry",
  "email_address": "email",
  "mobile_phone_number": "phone_number",
  "portrait": "picture"
}

// Kept in parity with the issuer's own credential set - see
// attestation-definitions.ts's SUPPORTED_ATTESTATIONS comment.
export const ATTESTATIONS_BY_FORMAT: { [id: string]: Attestation[] } = {
  "mso_mdoc": [PID_MSO_MDOC, MDL_MSO_MDOC, EHIC_MSO_MDOC, SCHUFA_MSO_MDOC, ARBEITSVERTRAG_MSO_MDOC],
  "dc+sd-jwt": [PID_SD_JWT_VC, EHIC_SD_JWT_VC, LEARNING_CREDENTIAL_SD_JWT_VC, RESIDENCE_PERMIT_SD_JWT_VC, SCHUFA_SD_JWT_VC, ARBEITSVERTRAG_SD_JWT_VC]
}

export const getAttestationByFormatAndType =
  (type: AttestationType, format: AttestationFormat): Attestation | null => {
    let filtered = ATTESTATIONS_BY_FORMAT[format as string].filter((attestation: Attestation) =>
      attestation.attestationDef.type === type
    );
    return filtered ? filtered[0] : null;
  }
