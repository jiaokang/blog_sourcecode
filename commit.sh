
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e



git init
git branch -m master main
git add -A
git commit -m 'commit'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:jiaokang/blog_sourcecode.git main

cd -

