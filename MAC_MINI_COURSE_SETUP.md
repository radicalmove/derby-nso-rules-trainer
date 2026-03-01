# Derby Course: Mac mini Setup + Sharing

## Stable public link (recommended)

- GitHub Pages (stable):
  - https://radicalmove.github.io/derby-nso-rules-trainer/

## Current live tunnel link (immediate fallback)

- Serveo tunnel URL (changes on restart):
  - https://16d92bb10c53a74e-27-252-96-17.serveousercontent.com

## Where it is deployed on Mac mini

- Host: `fld-mini` (Tailscale)
- User: `fldadmin`
- Course folder: `/home/fldadmin/derby-course`
- Local server URL on mini: `http://127.0.0.1:8091`

## Start/stop commands on Mac mini

```bash
/home/fldadmin/start-derby-course.sh 8091
/home/fldadmin/stop-derby-course.sh
/home/fldadmin/start-derby-course-tunnel.sh 8091
/home/fldadmin/stop-derby-course-tunnel.sh
/home/fldadmin/start-derby-course-serveo.sh 8091
/home/fldadmin/stop-derby-course-serveo.sh
```

## Re-deploy from this machine

From `/Users/rcd58/derby-app`:

```bash
./scripts/deploy_to_macmini.sh 8091
```

## Share package

- Zip file created for sending directly:
  - `/Users/rcd58/derby-app/dist/derby-course-share.zip`

## Accessibility updates included

- Skip link to main content.
- Tablist/tabpanel semantics with `aria-selected`, `aria-controls`, and hidden inactive panels.
- Keyboard left/right navigation across course tabs.
- Signal image alt text and screen-reader-friendly panel structure.

## Note on public URL stability

Serveo and Cloudflare quick tunnels are temporary and can rotate URLs. Restart and fetch a new tunnel URL with:

```bash
/home/fldadmin/start-derby-course-serveo.sh 8091
/home/fldadmin/start-derby-course-tunnel.sh 8091
```

## Tailscale Funnel (future stable tunnel option)

`tailscale funnel` is available on the mini but currently disabled at the tailnet level.

Enable it once in Tailscale admin using:

- https://login.tailscale.com/f/funnel?node=n9PBEJBvRu11CNTRL
