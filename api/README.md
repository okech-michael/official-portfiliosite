# Contact Form Backend Setup

This API endpoint handles contact form submissions and sends emails.

## Environment Variables Required

Add these to your `.env.local` file (for local development) and to Vercel environment variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
RECIPIENT_EMAIL=okechonyango365@gmail.com
```

### Setting up Gmail App Password

1. Go to [Google Account Security Settings](https://myaccount.google.com/security)
2. Enable 2-Step Verification (if not already enabled)
3. Go to "App passwords" and create a password for "Mail" and "Windows Computer"
4. Use this generated password as `EMAIL_PASSWORD`

### Alternative: Using SendGrid (Recommended for Production)

1. Sign up at [SendGrid](https://sendgrid.com)
2. Get your API key
3. Replace the transporter config in `api/contact.ts` with:

```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});
```

## API Endpoint

- **URL**: `/api/contact`
- **Method**: `POST`
- **Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

- **Success Response** (200):
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

- **Error Response** (400/500):
```json
{
  "error": "Error message",
  "details": "Detailed error info"
}
```

## Testing

Use `curl`:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```
