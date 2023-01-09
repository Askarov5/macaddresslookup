FROM node:18-alpine AS dev
ENV NODE_ENV dev
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", ". -m 44:38:39:ff:ef:57 "]