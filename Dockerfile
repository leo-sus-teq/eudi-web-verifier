# Stage 1
FROM node:20.19.3 AS build-step
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package-lock.json /usr/src/app/

# `npm ci`, not `yarn install`: this repo's lockfile is package-lock.json
# (npm's format, not yarn.lock - confirmed nothing here pins yarn via a
# "packageManager"/"engines" field either) - `yarn install` against an npm
# lockfile just ignores it entirely and re-resolves the whole dependency
# tree from scratch on every build, which is both slow/CPU-heavy for an
# Angular-sized tree and non-deterministic (can resolve different versions
# on different machines/days). `npm ci` installs exactly what's already
# locked - faster, reproducible, and the standard tool for exactly this
# "install from an existing lockfile in a container build" situation.
RUN npm ci
COPY . /usr/src/app
RUN rm -rf dist
RUN npm run build

# Stage 2
FROM nginx
COPY /nginx/templates/nginx.conf.template /etc/nginx/templates/nginx.conf.template
COPY --from=build-step /usr/src/app/dist/verifier-ui/browser /usr/share/nginx/html
EXPOSE 4300
