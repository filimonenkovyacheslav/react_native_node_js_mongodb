FROM node:10-alpine
RUN apk add autoconf automake python make build-base libpng-dev libtool jq libexecinfo-dev 
WORKDIR /app/client
# RUN npm init -y && npm i -g create-react-app
EXPOSE 3000
CMD [ "yarn", "start" ]