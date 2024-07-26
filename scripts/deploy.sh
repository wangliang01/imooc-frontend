# 编写deploy to github pages脚本
#!/bin/sh

# 确保脚本抛出遇到的错误
set -e

# 打印当前工作路径
pwd
remote=$(git config --get remote.origin.url)

echo 'remote is: '$remote

# 新建一个发布的目录
mkdir gh-pages-branch
cd gh-pages-branch

# 创建一个新的仓库
# 设置发布的用户名与邮箱
git config --global user.name "$USER_NAME" >/dev/null 2>&1
git config --global user.email "$USER_EMAIL" >/dev/null 2>&1
git init

# 关联运程仓库
git remote add --fetch origin "$remote"

# 打印用户名与邮箱
echo 'user is: '$USER_NAME
echo 'email is: '$USER_EMAIL

# 打印打包后的目录
echo 'build dist is: '$outputDir

# 切换gh-pages分支
if git rev-parse --verify origin/gh-pages >/dev/null 2>&1; then
  git checkout gh-pages
  # 删除旧的文件内容
  git rm -rf .
else
  git checkout --orphan gh-pages
fi

# 把构建好的文件复制到gh-pages分支
cp -a "../${outputDir}/." .

ls -la

# 把所有文件添加到git
git add -A

# 添加一条提交记录
git commit --allow-empty -m "deploy to github pages [ci skip]"

# 推送到远程仓库
git push --force --quiet origin gh-pages

# 资源回收，删除临时分支与目录
cd ..
rm -rf gh-pages-branch

echo 'deploy to github pages success'
