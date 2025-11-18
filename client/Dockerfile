# ---------- Stage 1: Build React (Vite) ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy only package files first for fast docker caching
COPY package*.json ./
RUN npm install

# Copy the rest of the client project (src, index.html, etc.)
COPY . .

# Build Vite project (output goes to /app/dist)
RUN npm run build

# ---------- Stage 2: Serve build using Nginx ----------
FROM nginx:stable-alpine

# Copy Vite dist output to nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

