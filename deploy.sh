rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:oldniu23/one-gulu-ui-website.git
git push -f -u origin main &&
cd ..
echo https://oldniu23.github.io/one-gulu-ui-website/index.html