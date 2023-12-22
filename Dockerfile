#Node

FROM node:lts-alpine as build-stage

#crea la carpeta app
RUN mkdir app

#Directorio de trabajo
WORKDIR /app

#copiar package json (si ponemos ./ lo va copiar al directorio de trabajo )

COPY package.json ./
COPY yarn.lock ./

#corremos yarn install
RUN yarn install

# el primer punto desde mi carpeta raiz y el segundo punto es el directorio de trabajo

COPY . .

#correr yarn build

RUN yarn build

#server
FROM nginx:1.21.6-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
#expone el puerto se sirve desde este puerto
EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;"]