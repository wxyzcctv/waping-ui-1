rm -rf dist &&
npm run build  &&
cd dist
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:wxyzcctv/waping-ui.git &&
git push -f -u origin master &&
cd ..
echo https://wxyzcctv.github.io/waping-ui/index.html