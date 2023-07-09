# Introdutcion

## Get the app running

To launch the app, you can either launch the front and back of the applications simultanously by hand on 2 diffrent terminals, OR launch both of the docker files simultanously by hand in 2 separate terminals

You have three ways to get your app up and running :
- [via docker-compose](#use-docker-compose)
- [via dockers](#use-docker)
- [by hand](#launch-by-hand)


## Use docker-compose
If you want to use docker-compose to launch these applications, you have to install docker AND docker-compose on yout machine : docker : [documentation for docker installation](https://docs.docker.com/engine/install/), docker-compose : [documentation for docker-compose installation](https://docs.docker.com/compose/install/standalone/).
If not, you can go to the [Launch by hand section](#launch-by-hand) section to run the application without containers.

### build
To create the images relative to the front and back of your applications, you can use:
`docker compose run`

To launch those images you just created, you can run:
`docker compose up`
You can use the `-d` flag to make it run in the background.

The application backend should then be available on `localhost:8000`
The application frontend should then be availabke on `localhost:3000`

## Use docker
If you want to use only docker, you only have to install docker : [documentation for docker installation](https://docs.docker.com/engine/install/).
If not, you can go to the [Launch by hand section](#launch-by-hand) section to run the application without containers.

### back

to create the image, you can run, at the root of this project :
`docker build -t of-reviews-backend ./back`

The image has been created, you can see it with `docker images`

You can then launch the image, which created the containers for the backend :
`docker run -p "8000:8000" of-reviews-backend`

You can then access the api with your browser or postman with:
`localhost:8000`

### front

to create the image, you can run, at the root of this project :
`docker build -t of-reviews-frontend ./front`

The image has been created, you can see it with `docker images`

You can then launch the image, which created the containers for the backend :
`docker run -p "3000:3000" of-reviews-frontend`

You can then access the api with your browser or postman with:
`localhost:3000`

## Launch by hand

### back

###### `pip install -r requirements.txt`

installs the requirements in the virtual env.

###### `python ./manage.py runserver`

launches the server on localhost:8000
The complete list of the available scripts can be seen with `python manage.py`

### front

###### Available Scripts

The list of all the available scripts can be found in package.json.
In the project directory, you can run:

###### `npm install`

reads the package.json and installs the modules in nodes_modules and creates package-lock.json.

###### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

###### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
