# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy environment variables
COPY .env .env

# Build TypeScript
RUN npm run build

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
