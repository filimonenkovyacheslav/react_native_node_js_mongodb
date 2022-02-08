FROM node:10-alpine
WORKDIR /app
RUN apk add autoconf automake python make build-base libpng-dev libtool jq libexecinfo-dev
# RUN npm i express body-parser cors mongoose dotenv --save \
# RUN npm i nodemon --save-dev
ENV PATH $PATH:/app/node_modules/.bin
EXPOSE 8000
CMD [ "npm", "run", "server-dev" ]
# , "run", "server-dev"