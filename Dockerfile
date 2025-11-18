FROM node:20-alpine AS builder
WORKDIR /app

COPY client ./client
RUN cd client && npm install && npm run build

COPY server ./server
RUN cd server && npm install

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/server ./server

EXPOSE 3000
CMD ["node", "server/src/server.js"]
