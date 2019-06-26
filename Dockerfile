FROM node:10-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm rebuild node-sass && \
    npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/