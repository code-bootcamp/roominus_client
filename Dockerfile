FROM node:14

WORKDIR /ROOMINUS/ 
COPY . /ROOMINUS/

RUN yarn install
RUN yarn build
CMD yarn start 

