#!/bin/sh

# 定义变量
user_name="Alice"
user_age=30

# 打印欢迎信息
echo "Hello, $user_name! You are $user_age years old."

# 判断年龄是否大于18岁
if [ $user_age -gt 18 ]; then
  # 如果年龄大于18岁，打印提示信息
  echo "You are an adult!"
elif [ $user_age -lt 18 ]; then
  # 如果年龄小于18岁，打印提示信息
  echo "You are a minor!"
fi

# 循环
echo "Counting from 1 to 5:"
for i in {1..5}
do
  echo "$i"
done

# 函数
function greet() {
  local greeting="$1"
  echo "$greeting, $user_name!"
}

greet "Good morning"

# 数组
colors=("red" "green" "blue")
echo "The first color is ${colors[0]}"
for color in "${colors[@]}"; do
  echo "$color"
done

# 读取用户输入
read -p "Enter your age: " user_age
echo "Your age is $user_age."

# 简单的算术运算
sum=$(($user_age + 5))
echo "Next year you will be $sum years old."

# 处理命令行参数
echo "Number of arguments: $#"
for arg in "$@"; do
  echo "Argument: $arg"
done

# 判断文件是否存在
file_path="example.txt"
if [ -f "$file_path" ]; then
  echo "File exists!"
else
  echo "File does not exist!"
fi

# 使用外部命令
# 定义容器名称
container_name="imooc-backend-postgresql-1"

# 使用 docker inspect 获取容器的状态
Running=$(docker inspect --format '{{.State.Running}}' "$container_name")

echo "$container_name is running: $Running"