FROM node:21-alpine
USER node
RUN mkdir /home/node/2048
WORKDIR /home/node/2048
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]