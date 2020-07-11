FROM node:alpine as build

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --pure-lockfile --no-progress

COPY . ./
RUN yarn build

# runtime
FROM nginx:alpine
LABEL maintainer="Bamdad Sabbagh <devops@bamdadsabbagh.com>"

COPY --from=build /app/build /app
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]