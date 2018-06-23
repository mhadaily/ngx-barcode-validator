# base image
FROM node:10-alpine

# set working directory
# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /ngx-barcode-scanner

# Change directory so that our commands run inside this new directory
WORKDIR /ngx-barcode-scanner

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /ngx-barcode-scanner/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./package.json /ngx-barcode-scanner/package.json
RUN npm --version
RUN npm install -g @angular/cli@latest
RUN npm install --unsafe-perm=true

# add app
COPY . /ngx-barcode-scanner

# start app
CMD ng serve --aot -H 0.0.0.0
