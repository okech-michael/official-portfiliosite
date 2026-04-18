# Michael Onyango — Developer Portfolio

A professional, modern portfolio built with **Django** + **HTML/CSS/JS**.

## Tech Stack
- Django 4.2
- WhiteNoise (static files)
- Gunicorn (production server)
- Deployed on Railway

---

## Project Structure

```
portfolio/
├── config/               # Django project config (settings, urls, wsgi)
├── portfolio/            # Portfolio app (views, urls)
├── templates/            # HTML templates
│   ├── base.html
│   ├── home.html
│   ├── skills.html
│   ├── projects.html
│   └── contact.html
├── static/
│   ├── css/main.css
│   ├── js/main.js
│   └── images/           # Place profile.jpg here
├── manage.py
├── requirements.txt
└── Procfile
```

---

## Local Setup

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd portfolio

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate       # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run migrations
python manage.py migrate

# 5. Collect static files
python manage.py collectstatic --noinput

# 6. Start development server
python manage.py runserver
```

Visit: http://127.0.0.1:8000

---

## Add Profile Image

Place your profile photo at:
```
static/images/profile.jpg
```
The `home.html` template references it as `{% static 'images/profile.jpg' %}`.

---

## Deploy to Railway

1. Push to GitHub
2. Create new Railway project → Deploy from GitHub repo
3. Add environment variables:
   - `SECRET_KEY` — generate a strong random key
   - `DEBUG` — set to `False`
   - `ALLOWED_HOSTS` — add your Railway domain
4. Railway auto-detects `Procfile` and runs `gunicorn`

---

## Email Configuration

To receive contact form messages, update `config/settings.py`:

```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'
```

Also uncomment the `send_mail` block in `portfolio/views.py`.

---

Built by **Michael Onyango** · okechmichael2004@gmail.com