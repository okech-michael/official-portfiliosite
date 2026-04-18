# Railway Deployment Guide

This project is configured for deployment on Railway.app using Nixpacks.

## Prerequisites
- Railway account (https://railway.app)
- GitHub repository connected to Railway

## Setup Instructions

### 1. Connect Repository to Railway
1. Create a new Railway project
2. Connect your GitHub repository (engineer-michael)
3. Railway will automatically detect the Python project

### 2. Environment Variables
Set these variables in your Railway project settings:

```env
SECRET_KEY=generate-a-long-random-secret-key-here-minimum-50-characters
DEBUG=False
ALLOWED_HOSTS=your-railway-app.up.railway.app,www.your-domain.com
```

**How to generate a SECRET_KEY:**
- Visit https://djecrety.ir/
- Copy the generated key and paste it in Railway's environment variables

### 3. How the Build Works
- **nixpacks.toml**: Tells Railway/Railpack how to build the app
- **start.sh**: Runs migrations and starts gunicorn server
- **Procfile**: Specifies how to run the app (calls start.sh)
- **runtime.txt**: Pins Python 3.11.9
- **requirements.txt**: Contains all dependencies

### 4. Build Process
Railway automatically:
1. Installs Python 3.11.9
2. Installs requirements from `requirements.txt`
3. Runs `start.sh` which:
   - Collects static files
   - Runs database migrations
   - Starts the gunicorn web server

### 5. Static Files
- WhiteNoise automatically compresses and serves static files
- No additional configuration needed
- CSS, JS, and images are handled automatically

### 6. Database
- **Development**: Uses SQLite (db.sqlite3)
- **Production**: For persistent storage, add a PostgreSQL plugin in Railway dashboard
  - Railway will set DATABASE_URL automatically
  - Uncomment the PostgreSQL settings in settings.py

### 7. Security Features (Production)
When `DEBUG=False`:
- ✅ HTTPS enforced
- ✅ Secure cookies enabled
- ✅ HSTS headers (1 year)
- ✅ XSS protection headers
- ✅ CSRF protection
- ✅ Browser cache headers

### 8. Deployment Process
1. Push changes to GitHub `main` branch
2. Railway automatically detects the push
3. Railway builds the app using `nixpacks.toml`
4. Railway runs `start.sh`
5. Your app is live!

### 9. Monitoring & Logs
- Railway dashboard shows real-time logs
- Check logs for migration errors or startup issues
- Use "View logs" in the deployment section

## Troubleshooting

### Build fails with "Railpack could not determine..."
- Ensure `nixpacks.toml` exists in root directory ✓
- Ensure `requirements.txt` exists ✓
- Ensure `runtime.txt` specifies Python version ✓

### Static files not loading
- Railway runs `collectstatic` in `start.sh` automatically
- Check that `STATIC_ROOT` and `STATIC_URL` are configured in settings.py

### Database errors after deployment
- Check if migrations ran by viewing deployment logs
- If needed, run migrations manually:
  ```bash
  railway run python manage.py migrate
  ```

### App crashes on startup
- Check deployment logs in Railway dashboard
- Ensure SECRET_KEY and DEBUG environment variables are set
- Verify ALLOWED_HOSTS includes your Railway domain

### Environment variables not working
- Ensure you set them in Railway project settings (not .env)
- Railway doesn't use .env files in production
- Restart the deployment after adding variables

## Testing Locally Before Deployment
```bash
# Test with production settings
export DEBUG=False
export SECRET_KEY="your-secret-key"
python manage.py runserver
```

## Support
- Railway Docs: https://railway.app/docs
- Railway Discord: https://railway.app/chat
- Nixpacks: https://nixpacks.com
