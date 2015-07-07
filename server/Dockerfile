FROM node:0.10.38

ADD package.json /
RUN npm install
RUN mkdir /src
ADD . /src
WORKDIR /src

CMD ["node", "index" ]

EXPOSE 8000