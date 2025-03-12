FROM nginx:alpine

COPY ./dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ashesdb.conf /etc/nginx/conf.d
