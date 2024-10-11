FROM node

COPY nodemon.json nodemon.json
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY .env .env
COPY src src

RUN npm install

CMD ["npm", "start"]