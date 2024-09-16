FROM oven/bun:1.1.24

WORKDIR /app
RUN mkdir packages
COPY package.json ./
COPY packages/*/package.json ./packages/
RUN ls -a
COPY packages ./packages
RUN bun install
WORKDIR /app/packages/server
CMD bun run ./src/index.ts