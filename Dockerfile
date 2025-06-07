FROM node:14

RUN mkdir /chakra_frontend

WORKDIR /chakra_frontend

COPY ./package.json /chakra_frontend

RUN npm install

COPY . /chakra_frontend

RUN npm run build

CMD ["npm", "start"]