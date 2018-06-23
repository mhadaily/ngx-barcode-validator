# base image
FROM node:10.5-alpine

# set working directory
# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /ngx-barcode-scanner

# Change directory so that our commands run inside this new directory
WORKDIR /ngx-barcode-scanner

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /ngx-barcode-scanner/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./package.json /ngx-barcode-scanner/package.json
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
RUN npm install -g @angular/cli@latest
RUN npm i

# add app
COPY . /ngx-barcode-scanner

EXPOSE 49153
EXPOSE 4200

# start app
CMD ng serve --aot --host 0.0.0.0
