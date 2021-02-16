rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git push -f git@github.com:tq13111/muji-ui.git master:gh-pages &&
cd ../ &&
echo https://tq13111.github.io/muji-ui/index.html

