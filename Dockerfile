# Use the official Node.js image as base
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependecies
COPY package*.json ./

RUN npm install

# Copy application code
COPY . .

# Expose port on 3000
EXPOSE 3000

# Define the command to run the application
CMD ["node", "node-app.js"]