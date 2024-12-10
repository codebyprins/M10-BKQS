FROM php:8.2-fpm

# Install the required PHP extensions
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Copy custom PHP configuration (optional)
COPY ./docker/php/php.ini /usr/local/etc/php/php.ini

# Set the working directory
WORKDIR /var/www/html
