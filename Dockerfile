FROM node:16-alpine AS builder

WORKDIR /var/app

COPY ./ /var/app

RUN yarn && yarn run export

FROM nginx:alpine

COPY --from=builder /var/app/build /usr/share/nginx/html