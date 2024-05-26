FROM node:lts-alpine3.20

# As non-root user
# Copy files as a non-root user. The `node` user is built in the Node image.
WORKDIR /usr/src/app
RUN chown node:node ./
USER node

# Defaults to production, docker-compose overrides this to development on build and run.
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Copy dependencies list
COPY package.json package-lock.json ./

# Install only dependencies from package-lock.json & uses Docker image cache instead of NPM cache
RUN npm ci && npm cache clean --force

# Copy the rest of required files
COPY ./src ./src

# Expose the port the app runs in
EXPOSE 3000

# Execute NodeJS (not NPM) to handle SIGTERM and SIGINT signals.
CMD ["node", "./src/app.js"]