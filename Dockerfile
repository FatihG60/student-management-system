# Aşama 1: Build aşaması
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Aşama 2: Serve aşaması
FROM node:14-alpine

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/server.js ./
COPY package*.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["node", "server.js"]
