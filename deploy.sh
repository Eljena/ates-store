#!/bin/bash
set -e

git reset --hard HEAD
git clean -fd --exclude=.env
git pull origin main

composer install --no-dev --optimize-autoloader
php artisan optimize:clear

npm ci
npm run build

php artisan migrate --force
php artisan optimize
