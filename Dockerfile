# Use a single-stage build
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 8081

# Start the application
CMD ["npm", "start"]

