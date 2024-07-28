# Aşama 1: Build aşaması
FROM node:18 AS build

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kaynak kodunu kopyala
COPY . .

# Uygulamayı build et
RUN npm run build

# Aşama 2: Serve aşaması
FROM nginx:alpine

# Build aşamasından build klasörünü kopyala
COPY --from=build /app/build /usr/share/nginx/html

# Nginx yapılandırma dosyasını kopyala
COPY nginx.conf /etc/nginx/nginx.conf

# Konteyner 80 portunu expose et
EXPOSE 80

# Nginx başlat
CMD ["nginx", "-g", "daemon off;"]
