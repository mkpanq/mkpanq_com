FROM local/os_base:latest AS base

SHELL ["/bin/bash", "-c"]

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
ENV BASH_ENV=~/.bashrc
COPY pnpm-lock.yaml package.json ./
RUN source ~/.asdf/asdf.sh && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN source ~/.asdf/asdf.sh && pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/entrypoint.sh ./entrypoint.sh

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"

# ENTRYPOINT ["/bin/bash"]

RUN chmod 755 ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]
