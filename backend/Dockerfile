FROM node:20.11.0-alpine3.18

WORKDIR /music-api 

COPY package* .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]
CMD ["dev"]


