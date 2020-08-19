# NBA React Components

## Purpose

This project creates components that are meant to be imported by other projects. It also provides an app to be run/built for displaying examples.

## Development Server

To run a development web-server, just run the command line below. The application will start and it will be accessible through http://localhost:3000.

~~~
npm run start
~~~

## Test

In order to test, just run the command below.

~~~
npm run test
~~~

## Build Components

In order to build the components with webpack, just run the command below.

~~~
npm run build-component
~~~

## Build App

In order to build the app, just run the command line below. 
~~~
npm run build
~~~

### Build App with Docker
In order to build an image for docker, just run the command line below
~~~
docker build . -t nba-react-components
~~~

And to run, simply run the app and then expose the port you want to. And that's it, with the command bellow the application will be available in http://localhost.
~~~
docker run -p 80:80 nba-react-components
~~~