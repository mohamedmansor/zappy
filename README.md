# Zappy

Zappy is an node app that listen to slack channel and after finding word "go". It will fetching tweets form FictionFone(twitter account) time line.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to install :
```
Node js
mongo DB
express js
```
Node Packages :
```
@slack/client
twitter-node-client
mongodb
```

### Installing

After installing Prerequisites go to zappy directory

for fetching tweets:
```
node tweets.js
```
for listen to slack channel:
```
node slack.js
```


## Built With

* [Node js]https://nodejs.org/en/) - The backend 
* [Mongo](https://www.mongodb.com/) - Database 
* [Express js](https://www.expressjs.com) - The web framework

## app status
app not stable yet it's in the development stage.