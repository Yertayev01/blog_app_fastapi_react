FROM node:16.3-slim
WORKDIR /client
COPY package.json /client
COPY package-lock.json /client
COPY ./ /client
RUN npm i