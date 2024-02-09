FROM node:20.11.0-alpine3.18

WORKDIR /app-frontend 

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

