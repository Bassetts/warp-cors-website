FROM node:alpine AS builder

WORKDIR /usr/src/site

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /usr/src/site/_site /usr/share/nginx/html