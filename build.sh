#!/bin/bash
set -e

# Build script for Railway
# Install dependencies
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --noinput --clear

echo "Build completed successfully!"
