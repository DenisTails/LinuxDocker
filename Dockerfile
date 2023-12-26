FROM node:18
COPY ./package*.json .
RUN npm install
COPY ./build ./build
COPY ./public ./public
COPY ./src ./src
CMD ["npm","start"]
