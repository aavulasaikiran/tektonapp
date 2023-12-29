# Stage 1
FROM node:latest as build
WORKDIR /app
COPY package.json ./
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM node:latest
WORKDIR /app
COPY --from=build /app/dist /app
COPY --from=build /app/package.json /app/package.json 
RUN npm install
EXPOSE 8081
CMD ["npm", "start"]
