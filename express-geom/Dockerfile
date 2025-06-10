# Base image
FROM node:18.20.2

# Working directory
WORKDIR /app

# Copy project package.json
COPY package*.json ./

# Install prod deps
RUN npm install --only=production

# Copy the rest of the app
COPY . .

# Expose port 3001
EXPOSE 3001

# Start app
CMD ["node", "src/index.js"]
