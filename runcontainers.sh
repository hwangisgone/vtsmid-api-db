#!/bin/sh

env_flag="-e POSTGRES_HOST=localhost -e POSTGRES_PORT=5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=VTS-STUDENT"
docker run --name vts-db "$env_flag" -d vts-image-db-postgres
docker run --name vts-api "$env_flag" -p 3000:3000 -d vts-image-api