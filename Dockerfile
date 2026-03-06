# ============================================
# Stage 1: Install dependencies
# ============================================
FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --no-audit --no-fund

# ============================================
# Stage 2: Build Next.js application
# ============================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ============================================
# Stage 3: Production runner
# ============================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy standalone server
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy blog content (lib/blog.ts reads MDX files via process.cwd()/content/blog)
COPY --from=builder --chown=nextjs:nodejs /app/content ./content

# Set correct permissions for prerender cache
RUN mkdir -p .next && chown nextjs:nodejs .next

USER nextjs

# Scaleway Serverless Containers: app listens on PORT env var
# Next.js standalone server.js respects HOSTNAME and PORT
ENV HOSTNAME="0.0.0.0"
ENV PORT=8080

EXPOSE 8080

CMD ["node", "server.js"]
