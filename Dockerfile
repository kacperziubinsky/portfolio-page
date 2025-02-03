# Use a lightweight node image
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency caching
COPY package*.json ./

# Install dependencies efficiently
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 2137

# Set environment variable (optional, depending on framework)
ENV NODE_ENV=development

# Run the application
CMD ["npm", "run", "dev"]
