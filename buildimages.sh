#!/bin/sh

docker build -f API.Dockerfile -t vts-image-db-postgres .
docker build -f DB.Dockerfile -t vts-image-api .

