FROM node:22-alpine
LABEL authors="savchenkoi"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE $NEXT_APP_PORT

CMD ["npm", "start"]