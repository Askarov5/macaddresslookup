FROM node:18
ENV NODE_ENV dev
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# RUN npm ci --only=production
COPY . .
RUN npm i -g .
EXPOSE 8080
CMD ["npm", "test"]