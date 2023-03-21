ARG PHP_VERSION="8.1"
ARG COMPOSER_VERSION="2.3"
ARG NODE_VERSION="16"

FROM forumone/composer:${COMPOSER_VERSION}-php-${PHP_VERSION} AS base

COPY . .

# Install without dev dependencies
RUN set -ex \
  && composer install --no-dev --prefer-dist

#Theme
FROM forumone/gesso:4-node-v${NODE_VERSION}-php-${PHP_VERSION} AS theme-base

WORKDIR /app

RUN npm install --global npm@latest

COPY ["docroot/themes/custom/burnham", "./"]

RUN if test -e package-lock.json; then npm ci; else npm i; fi

FROM theme-base AS theme

RUN set -ex \
  && npm run build-storybook \
  && npm run build \
  && rm -rf node_modules

# Building artifact
FROM busybox AS artifact

WORKDIR /var/www/html

COPY --from=base ["/app/vendor", "vendor"]
COPY --from=base ["/app/docroot", "docroot"]
COPY --from=base ["/app/config", "config"]
COPY --from=base ["/app/composer.json", "composer.json" ]
COPY --from=base ["/app/composer.lock", "composer.lock" ]

COPY --from=theme ["/app", "docroot/themes/custom/burnham"]

FROM artifact
