FROM node

WORKDIR /here/weare

COPY . /here/weare

RUN npm install 

EXPOSE 3000
CMD npm start
