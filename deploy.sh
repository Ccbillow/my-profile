#!/bin/bash

LOCAL_DIR=/Users/qianxun/Downloads/simplefolio/dist/
REMOTE_USER=ubuntu
REMOTE_IP=192.9.172.207
REMOTE_DIR=/home/ubuntu/profile/

npm run build

# 同步文件（排除某些文件夹可加 --exclude）
rsync -avz --delete $LOCAL_DIR $REMOTE_USER@$REMOTE_IP:$REMOTE_DIR

# 重启 Nginx（可选，静态页面一般不需要重启）
ssh $REMOTE_USER@$REMOTE_IP 'sudo systemctl reload nginx'