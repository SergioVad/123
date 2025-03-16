cd ~/production-project
npm run build:prod

rm -r ~/../var/www/project/html
mv ~/App-Furniture-Prod/build ~/../var/www/project/html
