#!/usr/bin/env bash
set -euo pipefail

HOST="fldadmin@fld-mini"
KEY="${HOME}/.ssh/codex_macmini_temp"
REMOTE_DIR="/home/fldadmin/derby-course"
PORT="${1:-8091}"

rsync -az --delete \
  -e "ssh -i ${KEY}" \
  --exclude '.git' \
  "${PWD}/" "${HOST}:${REMOTE_DIR}/"

ssh -i "${KEY}" "${HOST}" "/home/fldadmin/start-derby-course.sh ${PORT}"
ssh -i "${KEY}" "${HOST}" "/home/fldadmin/start-derby-course-tunnel.sh ${PORT}"
