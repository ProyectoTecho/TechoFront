FROM node:12.0.0
WORKDIR /front
COPY . .
RUN ["npm", "i"]
RUN ["npm", "run", "build"]
EXPOSE 3000
