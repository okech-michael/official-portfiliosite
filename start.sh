#!/bin/bash
set -e

echo "Starting Django portfolio deployment..."

# Try collectstatic, but don't fail if it has issues
echo "Collecting static files..."
python manage.py collectstatic --noinput --no-input 2>&1 || echo "Warning: collectstatic had issues but continuing..."

# Run migrations
echo "Running migrations..."
python manage.py migrate --noinput

# Start the app with gunicorn on the PORT provided by Railway (default 8000)
PORT=${PORT:-8000}
echo "Starting gunicorn on port $PORT..."
exec gunicorn config.wsgi:application --bind 0.0.0.0:$PORT --workers 2 --worker-class sync --timeout 60 --keep-alive 5
