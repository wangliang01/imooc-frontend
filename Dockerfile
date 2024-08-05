# 声明构建阶段的镜像
# build stage
FROM node:18 as build-stage

# 设置维护者信息
LABEL maintainer="1392830517@qq.com"

# 设置工作目录
WORKDIR /app

# 将当前目录内容复制到容器中
COPY . .

# 安装依赖并执行构建命令
RUN npm install
RUN npm run build

# 声明生产阶段的镜像
# production stage
FROM nginx:1.23 as production-stage

# 将构建阶段生成的文件复制到nginx的静态文件目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动nginx服务
CMD ["nginx", "-g", "daemon off;"]