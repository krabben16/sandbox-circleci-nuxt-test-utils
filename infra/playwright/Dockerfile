# https://playwright.dev/docs/docker/#base-images
FROM mcr.microsoft.com/playwright:bionic

RUN apt-get update

ENV PROJECT_ROOT=/var/www/playwright
WORKDIR $PROJECT_ROOT

COPY package.json .
COPY yarn.lock .
RUN yarn install
