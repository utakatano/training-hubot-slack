# Hubot Slack Training

## Environment

- Node.js ... 16.1.0

## Setup

1. move into `app/myhubot` directory and run `npm install`.

2. When you use this repository with Docker and Docker Compose,   
please create `env-variables.env` to define environment variables.  
Then it is load by starting the container.

```
HUBOT_SLACK_TOKEN=xxxxxx
HUBOT_GITHUB_TOKEN=xxxxxx 
USERNAME=xxxxxx
```

If you use it with your local machine, please set environment variables.

```sh
export HUBOT_SLACK_TOKEN=xxxxxx
export HUBOT_GITHUB_TOKEN=xxxxxx 
export USERNAME=xxxxxx
```

## How to use with slack in local

1. run below command

```sh
HUBOT_SLACK_TOKEN=$HUBOT_SLACK_TOKEN ./bin/hubot -a slack
```

or you can run `npm start` as same command is written in package.json

2. please type in the hubot DM or channel inviting the hubot.

## References

Qiita
- https://qiita.com/ryofu/items/f1dadc2093b3017b5beb
- https://qiita.com/tubone/items/11a7ceb3e7013139abab
- https://qiita.com/kiriki-qwt/items/26bdf537169891b22653#slack%E3%81%8B%E3%82%89hubot%E7%B5%8C%E7%94%B1%E3%81%A7github%E4%B8%8A%E3%81%AB%E3%83%97%E3%83%AB%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%82%92%E4%BD%9C%E3%82%8B