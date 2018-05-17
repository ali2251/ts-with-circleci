FROM node:carbon

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install
RUN tsc $BUILD_SOURCESDIRECTORY

COPY lib lib

EXPOSE 3000
CMD [ "yarn", "start" ]
