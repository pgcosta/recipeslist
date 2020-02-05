FROM node:10

# set working directory
RUN mkdir app
WORKDIR app

COPY . .

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD npm start