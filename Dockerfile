FROM node:alpine

EXPOSE 3000

WORKDIR /usr/app
COPY . .

CMD ["npm", "start"]