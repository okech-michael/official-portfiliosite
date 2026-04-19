#!/bin/bash

# Get PORT from environment, default to 8000
PORT=${PORT:-8000}

# Try migrations - don't fail if it errors
python manage.py migrate --noinput 2>/dev/null || true

# Start gunicorn immediately with minimal config
exec gunicorn config.wsgi:application \
  --bind 0.0.0.0:$PORT \
  --workers 1 \
  --worker-class=sync \
  --timeout 120 \
  --access-logfile - \
  --error-logfile -
