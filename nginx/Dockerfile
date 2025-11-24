# Build stage for client
FROM node:20-alpine AS client-build
WORKDIR /app
COPY client/package.json client/package-lock.json ./
RUN npm ci
COPY client/ .
RUN npm run build

# Nginx stage
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=client-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
