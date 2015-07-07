# Running Radar with docker

## The explaining

So you want to run quickly a radar server inside docker, and you don't want to think 
about connecting containers, or launching new virtual machines. You just want it to work. 

## The preparing

* Install docker, docker-machine and docker-compose.
* https://docs.docker.com/machine/
* https://docs.docker.com/compose/

## The doing

### Create on VM to run radar

    docker-machine create --driver virtualbox radar-example

### Inspect current VMs

    docker-machine ls

### Let docker know which VM is the current one
    
    eval "$(docker-machine env radar-example)"
    docker ps

It should be empty, since it's brand new. 

### Building Radar

Now, let's build our radar container.

    docker-compose build

### Lastly, run radar

Run detached from the console

    docker-compose up -d

You can check the status of the containers (server and redis) by executing:

    docker-compose ps

## The enjoying

Open a browser window and check if your radar container is running. 

    open http://"$(docker-machine ip radar)":8000/ping

You should see something like:
  
    {"pong":"Radar running at 5a97e3cd4e06"}
