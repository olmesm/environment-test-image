FROM amd64/node:alpine

EXPOSE 3000

WORKDIR /usr/app
COPY . .

CMD ["sh", "run.sh"]