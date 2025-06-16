FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm i -g vite
COPY . .
EXPOSE ${PORT:-5173}
CMD ["npm", "run", "dev"]