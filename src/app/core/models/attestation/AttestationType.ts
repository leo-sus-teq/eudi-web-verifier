// Kept in exact parity with what eudi-srv-pid-issuer actually issues in this
// demo (see its docker-compose.yaml / IssuerUi.kt's CREDENTIAL_FAMILIES) -
// PHOTO_ID and PDA1 were removed because the issuer has no way to produce
// either, making them dead-end options here (selectable in this app, but
// nothing could ever satisfy the request).
export enum AttestationType {
  PID = "pid",
  MDL = "mdl",
  EHIC = "ehic",
  LEARNING_CREDENTIAL = "learning_credential",
  RESIDENCE_PERMIT = "residence_permit",
  SCHUFA = "schufa",
  ARBEITSVERTRAG = "arbeitsvertrag"
}
