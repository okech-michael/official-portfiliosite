#!/bin/bash
set -e

# Collect static files with minimal verbosity (1 = warnings + errors)
python manage.py collectstatic --noinput --clear --verbosity 1

# Run migrations
python manage.py migrate --noinput

# Start the app with gunicorn on the PORT provided by Railway (default 8000)
PORT=${PORT:-8000}
exec gunicorn config.wsgi:application --bind 0.0.0.0:$PORT --timeout 60
