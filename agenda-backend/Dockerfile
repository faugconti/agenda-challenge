FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE ${PORT:-3000}
CMD ["node", "index.js"]