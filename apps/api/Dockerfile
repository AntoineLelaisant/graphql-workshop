FROM node:16-alpine3.11 as dev

ARG USER_ID

RUN mkdir -p /usr/src/app && \
    deluser --remove-home node && \
    addgroup docker && \
    adduser -S -h /home/docker -u ${USER_ID:-1000} -G docker docker && \
    chown -R docker /home/docker /usr/src/app

USER docker
WORKDIR /usr/src/app

COPY --chown=docker package.json yarn.lock ./
RUN yarn install

COPY --chown=docker . ./

ENV NODE_ENV development

CMD ["yarn", "start:dev"]

EXPOSE 3000
