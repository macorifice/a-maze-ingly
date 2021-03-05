FROM node:latest

WORKDIR /mnt/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9090
CMD [ "node", "server.js" ]