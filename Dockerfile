# Build stage
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # produces static files in /app/dist

# Serve stage
FROM nginx:alpine

# Copy built static files to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
