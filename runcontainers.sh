#!/bin/sh

docker run --name vts-db --env-file=prod.env -p 5432:5432 -d vts-image-db-postgres
docker run --name vts-api --env-file=prod.env -p 3000:3000 -d vts-image-api