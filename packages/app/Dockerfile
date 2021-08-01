# syntax=docker/dockerfile:1.0.0-experimental

FROM node:14-alpine3.14

RUN mkdir -p /opt/project \
    && addgroup app \
    && adduser -S -D -H -h /opt/project app

WORKDIR /opt/project

COPY --chown=app:app ./dist /opt/project

USER app

EXPOSE 4700

ENTRYPOINT ["node"]
CMD ["index.js"]
