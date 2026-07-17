#!/bin/sh
set -eu

if [ -z "${NEXT_PUBLIC_MEDUSA_BACKEND_URL:-}" ]; then
  echo "NEXT_PUBLIC_MEDUSA_BACKEND_URL is required for the Medusa Next.js starter storefront." >&2
  exit 1
fi

yarn build
exec "$@"
