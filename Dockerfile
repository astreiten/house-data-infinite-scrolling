FROM node:18-alpine AS base
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

FROM base AS source
COPY --chown=node:node . /app
RUN npm run build

FROM nginx:1.19-alpine AS server

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=source /app/dist/ /var/www/localhost

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/base/ /etc/nginx/conf.d/base/
COPY ./nginx/local.conf /etc/nginx/conf.d/local.conf
