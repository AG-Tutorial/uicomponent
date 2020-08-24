# build process
FROM node:alpine as builder

# set working directory
WORKDIR '/app'
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli@9.0.1
COPY . .

# run tests
#RUN ng test --watch=false
#RUN ng e2e --port 4202

# generate build
CMD ng build --output-path=dist

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html