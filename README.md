# Slack Clone 

Demo: http://heavy-eye.surge.sh/

This project is a full stack web application. This is an attempt to clone Slack and some of its most used features. A real time chat service where users can create teams, private group chats, and upload files. Implemented custom authentication with JSON web tokens. Uses websockets to send messages in real time.
Server was deployed to google cloud and is running in a docker container. Client was deployed to Surge.sh for static uploads. This is an open source project so please feel free to contribute!

### User Stories:
- Users can communicate in real time through websockets
- Users can login and register
- Users can upload files (.jpeg, .mp3, .txt)
- Users can create channels and teams
- Users can create public and private group chats
- Users can add other users to their team
- Users can direct message users in their team


### video walkthrough (using two different browsers to mimic different devices):
![alt text](https://raw.githubusercontent.com/AndresXI/Slack-Clone/master/slack-demo-2.gif "Logo Title Text 1")


### Client side tools:
- ReactJS
- Apollo
- GraphQL
- Mobx
- Sass
- Sematic-ui-react

### Server side tools:
- Express
- GraphQL
- Postgres
- Websockets
- Sequelize
- PubSub (for subscriptions)
- JSON web tokens

### Deployment tools:
- Docker
- Google Cloud
- Redis
- Nginx
- Ubuntu

