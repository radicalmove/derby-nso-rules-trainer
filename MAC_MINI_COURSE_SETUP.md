# Derby Course: Mac mini Setup + Sharing

## Current live link

- Public course URL (Cloudflare Quick Tunnel):
  - https://representation-reform-possibilities-walk.trycloudflare.com

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

Cloudflare Quick Tunnel URLs are temporary. If the tunnel restarts, generate a fresh URL with:

```bash
/home/fldadmin/start-derby-course-tunnel.sh 8091
```
