#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/www/wwwroot/cadbrasilv2"
BRANCH="${1:-main}"

cd "$APP_DIR"

git fetch origin
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

npm ci
NITRO_PRESET=node-server npm run build

if pm2 describe cadbrasilv2 >/dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi

pm2 save
echo "Deploy OK: $(git rev-parse --short HEAD)"
