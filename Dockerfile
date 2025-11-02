# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm install

# Copy the rest of the app
COPY . .

# Expose your app port
EXPOSE 3000

# Install nodemon globally
RUN npm install -g nodemon

# Command for development (auto-reload)
CMD ["nodemon", "server.js"]
