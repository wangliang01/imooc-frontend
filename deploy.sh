#!/bin/bash
container_name="imoocfrontend"
port=11006
# 定义变量
CONTAINER_NAME=${container_name}
PORT=${port}

# 输出变量值
echo "Container Name: $CONTAINER_NAME"
echo "Port: $PORT"

# 检查容器是否已经在运行
is_container_running=$(docker inspect -f "{{.State.Running}}" $CONTAINER_NAME 2> /dev/null)

# 如果容器正在运行，停止并删除容器
if [[ $is_container_running == "true" ]]; then
    echo "Stopping and removing the existing container..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# 检查端口是否被占用
# 使用 curl 命令代替 nc
is_port_in_use=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT -m 1)
is_port_in_use=$(echo "$is_port_in_use" | grep -c "200")

# 如果端口被占用，输出警告信息
if [[ $is_port_in_use -gt 0 ]]; then
    echo "Warning: Port $PORT is already in use."
    read -p "Do you want to continue? [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborting operation."
        exit 1
    fi
fi

# 通过 Dockerfile 构建镜像
echo "Building the Docker image..."
docker build --no-cache -t $CONTAINER_NAME:latest .

# 检查构建是否成功
build_status=$?
if [[ $build_status -ne 0 ]]; then
    echo "Error: Docker build failed."
    exit 1
fi

# 运行镜像
echo "Starting the container..."
docker run -itd -p $PORT:80 --name $CONTAINER_NAME $CONTAINER_NAME:latest

# 检查容器是否成功启动
is_container_running=$(docker inspect -f "{{.State.Running}}" $CONTAINER_NAME 2> /dev/null)

if [[ $is_container_running != "true" ]]; then
    echo "Error: Container did not start successfully."
    docker logs $CONTAINER_NAME
    exit 1
fi

# 输出成功信息
echo "Container started successfully."