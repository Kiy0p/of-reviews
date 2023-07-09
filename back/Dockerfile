FROM python:3.11-slim-bookworm

# set environment variable for docker home
ENV DockerHOME=/home/app

# create directories to docker home
RUN mkdir -p $DockerHOME

# define orking directory to docker home
WORKDIR $DockerHOME

# set environment variables  
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1  

# copy whole project to your docker home directory. 
COPY . $DockerHOME

# install dependencies
RUN pip install -r requirements.txt

# port where the Django app runs  
EXPOSE 8000

# start server  
CMD ["python", "ofreviews/manage.py", "runserver", "0.0.0.0:8000"]