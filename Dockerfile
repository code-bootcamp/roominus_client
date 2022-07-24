FROM node:14

WORKDIR /roominus/
COPY . /roominus/

RUN yarn install
RUN yarn build
CMD yarn start 

