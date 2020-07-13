## Prod deployment

Manual create-react-app devops deployment: https://dev.to/mubbashir10/deploy-your-react-app-to-ecs-fargate-38p9

## Docker

##### How to start up app

`docker-compose down -v --remove-orphans && docker-compose build --no-cache && docker-compose up`

##### Clean up Docker

`docker system prune`

https://phoenixnap.com/kb/remove-docker-images-containers-networks-volumes

`docker stop $(docker ps -qa); docker rm $(docker ps -qa); docker rmi -f $(docker images -qa); docker volume rm $(docker volume ls -q); docker network rm $(docker network ls -q)`
