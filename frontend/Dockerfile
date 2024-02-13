FROM node:20.11.0-alpine3.18

WORKDIR /home/app/frontend

ENV PATH /home/app/frontend/node_modules/.bin:$PATH

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

