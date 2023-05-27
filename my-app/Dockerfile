FROM node:18.15-alpine AS builder

# Create app directory
WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run","dev"]