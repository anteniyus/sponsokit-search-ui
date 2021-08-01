# Step 1
FROM node:10-alpine as build-step
RUN mkdir /search-ui-prod
WORKDIR /search-ui-prod
COPY package.json /search-ui-prod
RUN npm install
COPY . /search-ui-prod
RUN npm run build:production

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html