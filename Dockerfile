FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY lib lib

EXPOSE 3000
CMD [ "yarn", "start" ]
