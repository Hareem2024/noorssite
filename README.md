# Noor's Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- Responsive design for all screen sizes
- Smooth animations with Framer Motion
- Contact form with email functionality
- Mobile-optimized navigation
- Modern UI with dark theme

## Setup

1. Install dependencies:
```bash
npm install
```

2. For local development with email functionality:
```bash
npm run dev:full
```

This starts both the Vite dev server and local API server.

For just the frontend:
```bash
npm run dev
```

## Environment Variables

For production deployment (Vercel), set these environment variables:

- `GMAIL_USER` - Your Gmail address
- `GMAIL_APP_PASSWORD` - Gmail App Password (not regular password)
- `RECIPIENT_EMAIL` - Email address to receive form submissions

## Build

```bash
npm run build
```

## Deployment

The site is configured for Vercel deployment. The `/api` folder contains serverless functions that will automatically deploy as API routes.

Make sure to set the required environment variables in your Vercel project settings before deploying.

