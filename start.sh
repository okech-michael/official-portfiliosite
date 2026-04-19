#!/bin/bash

# Get PORT from environment, default to 8000
PORT=${PORT:-8000}

echo "=========================================="
echo "Starting portfolio app on port $PORT"
echo "DEBUG=$DEBUG"
echo "=========================================="

# Try migrations - show all output
echo "Running migrations..."
python manage.py migrate --noinput

# Start gunicorn with full error logging
echo "Starting gunicorn..."
exec gunicorn config.wsgi:application \
  --bind 0.0.0.0:$PORT \
  --workers 1 \
  --worker-class=sync \
  --timeout 120 \
  --access-logfile - \
  --error-logfile - \
  --log-level debug
