# 使用官方的 Node.js 鏡像作為基礎鏡像
FROM node:20.10.0

# 將 articlecamp-back 目錄中的所有文件覆制到工作目錄
COPY ./articlecamp-back /usr/src/app

# 設置工作目錄
WORKDIR /usr/src/app

# 暴露應用程序所使用的端口
EXPOSE 5000
