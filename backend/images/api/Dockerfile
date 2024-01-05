# Specify a base image
FROM node:latest

# Create app directory
WORKDIR /usr/app

# Install nodemon globally
RUN npm install -g nodemon

# Copy package.json and package-lock.json
COPY package*.json .

# Update package sources list with the latest versions of the packages
RUN apt-get update

# Install dependencies
RUN npm install --quiet

# # Install dependencies with audit and force flag (faker package has vulnerabilities)
# RUN npm install --audit --force

# Copy all files from current directory to working directory
COPY ./ ./

# Final command to run the app
CMD ["npm", "start"]