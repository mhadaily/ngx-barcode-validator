#########################
### build environment ###
#########################
# base image
FROM node:10-alpine as builder

# set working directory
RUN mkdir /ngx-barcode-scanner
WORKDIR /ngx-barcode-scanner

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /ngx-barcode-scanner/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /ngx-barcode-scanner/package.json
RUN npm install -g @angular/cli@latest
RUN npm install --only=production

# add app
COPY . /ngx-barcode-scanner

# run tests
RUN ng test --watch=false

# generate build
RUN npm run build

##################
### production ###
##################

# base image
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

# copy artifact build from the 'build environment'
COPY --from=builder /ngx-barcode-scanner/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
