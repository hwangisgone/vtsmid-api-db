FROM postgres:16.3-alpine3.20

# Copy the initialization SQL script into the Docker image
COPY ./tests/postgres-test.sql /docker-entrypoint-initdb.d/init.sql