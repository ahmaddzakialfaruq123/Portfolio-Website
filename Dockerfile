# Gunakan Nginx sebagai image dasar
FROM nginx:alpine

# Copy isi website ke direktori Nginx
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
