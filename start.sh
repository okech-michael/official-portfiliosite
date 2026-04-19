#!/bin/bash
set -e

# Collect static files
python manage.py collectstatic --noinput --clear --verbosity 0

# Run migrations
python manage.py migrate --noinput

# Start the app with gunicorn on the PORT provided by Railway (default 8000)
PORT=${PORT:-8000}
exec gunicorn config.wsgi:application --bind 0.0.0.0:$PORT
