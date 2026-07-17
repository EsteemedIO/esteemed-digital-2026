FROM node:20-bookworm-slim AS deps

RUN set -eux; \
  apt-get update; \
  apt-get install -y --no-install-recommends ca-certificates git; \
  rm -rf /var/lib/apt/lists/*; \
  corepack enable

WORKDIR /app

ARG MEDUSA_NEXTJS_STARTER_REF=main
RUN git clone --depth=1 --branch "$MEDUSA_NEXTJS_STARTER_REF" https://github.com/medusajs/nextjs-starter-medusa.git .

RUN yarn install --frozen-lockfile

FROM node:20-bookworm-slim AS runner

ENV NODE_ENV=production
ENV PORT=8000
ENV HOSTNAME=0.0.0.0

RUN corepack enable

WORKDIR /app
COPY --from=deps /app ./
COPY docker-entrypoint-esteemed.sh /usr/local/bin/docker-entrypoint-esteemed

RUN chmod +x /usr/local/bin/docker-entrypoint-esteemed

EXPOSE 8000
ENTRYPOINT ["docker-entrypoint-esteemed"]
CMD ["yarn", "start", "-p", "8000", "-H", "0.0.0.0"]
