# Verifier UI (`eudi-web-verifier`)

> [!NOTE]
> **This checkout is one piece of a larger local demo** — see the
> [top-level README](../README.md) for how it fits together with the
> issuer, wallet, and client-site apps. If you only ever run
> `./demo-up.sh` from the repo root, you won't interact with this
> directory directly at all — see "How this fits into the demo" below for
> why, and skip straight to "Re-designed for this demo" for what's
> actually different here from a plain upstream checkout.

The web UI a human actually clicks through at `https://verifier.localhost/`
— a Angular single-page app that talks to the [`eudi-verifier`](../eudi-verifier/)
Kotlin backend's REST API to build an OpenID4VP presentation request, show
its QR code / deep link, and display the verified result once a wallet
responds. This app owns **no verification logic of its own** — it's a
client for the backend, which is the actual trust anchor (see
`eudi-verifier`'s own README for the protocol details).

## How this fits into the demo

`demo-up.sh` never runs anything in *this* directory directly. Instead,
[`../eudi-verifier/docker-compose/docker-compose.yaml`](../eudi-verifier/docker-compose/docker-compose.yaml)
builds this whole project as its own Docker stage (see this directory's
own `Dockerfile`) and runs it as that compose file's `verifier-ui`
service, reachable through [the gateway](../gateway/) at
`https://verifier.localhost/`. So:

- **To use it**: just open `https://verifier.localhost/` once
  `./demo-up.sh` has brought everything up — nothing to run here.
- **To rebuild it** after editing source in this directory:
  ```bash
  cd ../eudi-verifier/docker-compose
  docker compose build verifier-ui
  docker compose up -d verifier-ui --force-recreate
  ```
- **To develop it standalone** (fast rebuild loop, browser auto-reload)
  instead of rebuilding the Docker image on every change, see "Local dev
  server" below.

It's easy to confuse this directory with **`eudi-verifier/`** — see the
[top-level README's naming note](../README.md#a-naming-note-eudi-verifier-vs-eudi-web-verifier)
for the full explanation. Short version: `eudi-verifier` is the backend
engine (Kotlin), this is the UI (Angular) that talks to it.

## Re-designed for this demo

This app started as the EUDI reference implementation's generic verifier
UI and was substantially reworked for this demo, beyond just the
[naming note](#how-this-fits-into-the-demo) above:

- **Credential picker.** The original UI was a bare multi-step wizard.
  This version adds a one-click "quick select" card grid on the home
  screen (`home.component.*`) — pick a credential, hit **Verify**, done —
  with the full step-by-step wizard still available behind an "Advanced"
  `<details>` disclosure for anyone who wants to customize the request
  (specific attributes, format, transaction data, etc.).
- **Credential catalog parity with the issuer.** `core/constants/
  attestation-definitions.ts` and `attestations-per-format.ts` were
  rewritten so the credential types offered here (PID, mDL, Diploma,
  EHIC, Residence Permit, Schufa Credit Report, Employment Certificate)
  match exactly what [`eudi-srv-pid-issuer`](../eudi-srv-pid-issuer/) can
  actually issue in this demo — same names, same claim sets, same order —
  instead of the generic upstream reference set (which included a couple
  of credential types this demo's issuer can't produce, and named the
  diploma-like credential differently than the issuer does).
- **Design parity with the issuer/wallet.** Card grid width, header
  layout, footer/compatibility-note styling, and mobile breakpoints were
  aligned with the issuer app's own equivalents (`eudi-srv-pid-issuer`'s
  `main.css`) so all three demo apps that share the dark TRUSTEQ palette
  read as one consistent product, not three visually distinct ones.
- **Long links behind a disclosure.** The QR-code screen's "or copy the
  link below" raw deep link now sits inside a collapsed `<details>`
  (`qr-code.component.html`/`.scss`) instead of always-visible raw text,
  matching the same pattern used on the issuer's and client-site's own
  QR-code screens.
- Mobile-responsive pass (viewport meta, breakpoint fixes for the
  vertical stepper and card grid) without changing the desktop layout —
  see `styles.scss`'s breakpoint-specific rules and their comments for
  what each one is actually fixing.

## Local dev server

You need Node (the Dockerfile pins `node:20.19.3`) and either `npm` or
`yarn` (the Dockerfile uses `yarn`; either works locally).

```bash
npm install
npm start   # runs `node set-env.js` then `ng serve --proxy-config src/proxy.conf.json`
```

Open **http://localhost:4200**. `src/proxy.conf.json` proxies API calls to
a verifier backend — by default this expects one reachable the way
`ng serve` is configured for; if you want it pointed at *this demo's*
already-running backend instead, edit that file to target
`https://verifier.localhost/` (or wherever [`eudi-verifier`](../eudi-verifier/)'s
own compose stack is reachable) and make sure that stack is up first
(`docker compose up -d` from `eudi-verifier/docker-compose/`).

`set-env.js` (run automatically via the `config` npm script ahead of
`start`/`build`/`watch`) generates `src/environments/environment*.ts` from
`.env` — see that script if you need to change what it reads.

## Building the way `demo-up.sh` does

```bash
docker compose build verifier-ui   # from ../eudi-verifier/docker-compose/
```

This runs the multi-stage `Dockerfile` in this directory: a Node stage
that does `yarn install && yarn run build`, then an `nginx` stage that
just serves the resulting `dist/verifier-ui/browser` static output — so
the running container has no Node/Angular runtime at all, just nginx and
static files.

## Project structure

- `src/app/core/` — services, models, and the shared `wallet-layout`
  (header/footer chrome present on every screen), plus the attestation
  catalog described above.
- `src/app/features/presentation-request-preparation/` — the home
  screen: quick-select card grid + the step-by-step "Advanced" wizard.
- `src/app/features/invoke-wallet/` — the QR-code / deep-link screen
  shown after building a request, and the DC API variant.
- `src/app/features/wallet-redirect/` — handles the redirect back from a
  wallet after presentation.
- `src/app/shared/` — reusable UI elements (logs viewer, issuer-chain
  config dialog, etc.) and utilities.

## Running tests

```bash
npm test              # unit tests via Karma
npm run test:coverage # with coverage
npm run lint          # ESLint, --fix
npm run stylelint     # stylelint over *.css/*.scss, --fix
```

## License

Apache License 2.0 — see [`LICENSE`](LICENSE) (this
project inherits its license from the upstream
[eudi-web-verifier](https://github.com/eu-digital-identity-wallet/eudi-web-verifier)
reference implementation it was forked from; Copyright (c) 2023-2026
European Commission). Third-party components: Angular CLI, `cbor`,
`jwt-decode`, `rxjs`, `qrcodejs` — see their own repos for their licenses.
