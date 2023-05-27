FROM node:18.15-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json
RUN npm install

COPY . ./

RUN npm run dev