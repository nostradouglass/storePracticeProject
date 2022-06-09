FROM node:18-alpine as builder

WORKDIR "/app"

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.22

COPY --from=builder /app/build/ /usr/share/nginx/html

COPY --from=builder /app/default.conf /etc/nx/conf.d/default.conf