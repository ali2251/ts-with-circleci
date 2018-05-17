FROM node:8.11.1
MAINTAINER Azure App Services Container Images <appsvc-images@microsoft.com>

# Create app directory
WORKDIR /src

# Install app dependencies
COPY package.json .

RUN yarn install

# Bundle app source
COPY . .

EXPOSE 8080 80
CMD [ "npm", "start" ]
