# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:22 AS base

# Set the working directory
WORKDIR /app

# Install dependencies
RUN apt-get update
RUN apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

# Install dependencies as the node user so mounted volumes inherit the right owner.
COPY --chown=node:node package.json package-lock.json ./
RUN chown node:node /app
USER node

RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY --chown=node:node . .

# This is a workaround for a bug in the canvas package:
# RUN npm rebuild canvas

# This is for patchpackages:
# RUN npm run postinstall

# Disable telematry:
RUN npx next telemetry disable

# Build the Next.js application
ENV NODE_OPTIONS="--max-old-space-size=4096"
# RUN npm run build

# ---------------------------------------------------------------------------- #
#                                   DB Backup                                  #
# ---------------------------------------------------------------------------- #
# For fetching AWS credentials:
USER root
RUN npm install -g dotenv-cli
USER node

CMD ["sh", "-c", "npm run migrate && npm run start"]