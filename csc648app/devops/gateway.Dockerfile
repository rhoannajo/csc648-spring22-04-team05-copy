FROM node:14-alpine

WORKDIR /main
COPY ./server/gateway.js /main
COPY ./package.json /main
COPY ./package-lock.json /main

RUN npm install

EXPOSE 4000

CMD ["node", "gateway.js"]