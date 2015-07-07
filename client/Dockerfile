FROM node:0.10.38

RUN mkdir /app
ADD . /app
RUN rm -r /app/node_modules; true
WORKDIR /app
RUN npm install

CMD ["node", "index" ]

EXPOSE 8000