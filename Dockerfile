FROM node:20 as angular

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM httpd:alpine3.20

WORKDIR /usr/local/apache2/htdocs/

COPY --from=angular /app/dist/quanbylms .