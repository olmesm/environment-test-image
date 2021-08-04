FROM amd6/node:alpine

EXPOSE 3000

WORKDIR /usr/app
COPY . .

CMD ["sh", "run.sh"]