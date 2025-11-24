# Dockerfile for client (Vite + React)
FROM node:20-alpine AS client-build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
