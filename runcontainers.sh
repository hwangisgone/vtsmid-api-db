#!/bin/sh

docker network inspect vts_mid_network >/dev/null 2>&1 || \
    docker network create --driver bridge vts_mid_network

docker volume create pgdata

docker run --name vts-db --network=vts_mid_network --env-file=prod.env -p 5433:5432 -v pgdata:/var/lib/postgresql/data -d vts-image-db-postgres
docker run --name vts-api --network=vts_mid_network --env-file=prod.env -p 3000:3000 -d vts-image-api