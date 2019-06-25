# based on Nginx, only has the compiled Angular app, ready for production with Nginx
FROM nginx:1.13
COPY ./dist/basic-angular-fe/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf