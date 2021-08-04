FROM amd64/node:alpine

EXPOSE 3000

WORKDIR /usr/app
COPY . .

# RUN ["npm", "install"]

CMD ["npx", "micro"]