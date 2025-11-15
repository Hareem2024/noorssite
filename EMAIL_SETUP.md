# Email Setup Instructions - Backend with Gmail SMTP

This setup uses Nodemailer to send emails directly via Gmail SMTP without third-party services.

## 1. Create Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable it if not already enabled)
3. Go to **Security** → **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Name it "Portfolio Contact Form"
6. Copy the generated **16-character App Password** (you'll need this)

⚠️ **Important**: Use the App Password, NOT your regular Gmail password!

## 2. Set Environment Variables

### For Local Development

Create a `.env` file in the root directory:

```env
GMAIL_USER=noorejaz576@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
RECIPIENT_EMAIL=noorejaz576@gmail.com
```

### For Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `GMAIL_USER` = `noorejaz576@gmail.com`
   - `GMAIL_APP_PASSWORD` = `your_16_character_app_password`
   - `RECIPIENT_EMAIL` = `noorejaz576@gmail.com`

### For Production (Netlify)

1. Go to your Netlify project dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the same variables as above

## 3. Testing Locally (Optional - if you want a dev server)

If you want to test the API locally, create a simple server:

Create `server.js`:
```javascript
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

// Import the API handler
import handler from './api/send-email.js';

app.post('/api/send-email', async (req, res) => {
  return handler(req, res);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

Then run: `node server.js`

## 4. Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy - the `/api` folder will automatically become serverless functions

### Netlify

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Add environment variables in Netlify dashboard
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy

## 5. Verify Setup

1. Fill out the contact form on your website
2. Submit it
3. Check your email (noorejaz576@gmail.com)
4. You should receive an email with the form submission

## Security Notes

- Never commit the `.env` file to Git (it's already in `.gitignore`)
- Keep your App Password secure
- The API endpoint is rate-limited by your deployment platform
- Consider adding rate limiting or CAPTCHA for production use

## Troubleshooting

**Error: Invalid login credentials**
- Make sure you're using an App Password, not your regular password
- Verify 2-Step Verification is enabled on your Google account

**Error: Connection timeout**
- Check your internet connection
- Verify Gmail SMTP settings are correct (they should be automatic with nodemailer)

**404 Error on API endpoint**
- Verify the API file is in the `/api` folder
- Check your deployment platform's serverless function configuration

