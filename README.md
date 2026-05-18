# Krish Bharucha Portfolio

A personal portfolio website for showcasing AI, machine learning, software engineering, research, projects, experience, and contact information.

The site is built with React, TypeScript, Vite, Tailwind CSS, shadcn/ui components, and a Netlify serverless backend for contact form email delivery.

## Features

- Responsive portfolio landing page
- Sections for hero, about, experience, projects, skills, and contact
- Styled contact form with validation and loading/error states
- Backend contact endpoint at `/api/contact`
- Email delivery through Resend
- Netlify-ready serverless function deployment

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React icons
- Netlify Functions
- Resend email API

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Update `.env.local` with your real values:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_receiver_email@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

Run the local app and contact backend:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Contact Form Backend

The contact form submits to:

```txt
/api/contact
```

In local development, `scripts/dev.mjs` starts a small local API server and proxies `/api/contact` from Vite to that backend.

In production, Netlify routes `/api/contact` to:

```txt
/.netlify/functions/contact
```

The function sends email using Resend and sets `reply_to` to the email address entered by the visitor, so replying to a contact form email replies directly to the sender.

## Environment Variables

Required:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

Notes:

- `.env.local` is for local development only.
- Do not commit real API keys.
- `.env.example` is only a template.
- If you are using Resend in testing mode, Resend may only allow emails to be sent to your verified account email.
- To send from a custom email address, verify your domain in Resend and update `CONTACT_FROM_EMAIL`.

## Deployment

This project is configured for Netlify.

Build command:

```bash
npm run build
```

Publish directory:

```txt
dist
```

Functions directory:

```txt
netlify/functions
```

Before deploying, add the required environment variables in Netlify:

```txt
Site configuration -> Environment variables
```

Then trigger a fresh deploy.

## Scripts

```bash
npm run dev
```

Runs the local backend and Vite dev server.

```bash
npm run dev:vite
```

Runs only the Vite frontend server.

```bash
npm run build
```

Builds the production app.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint.

## Security

Never commit:

- `.env.local`
- real Resend API keys
- private tokens or credentials

If an API key is accidentally exposed, revoke it immediately in Resend and create a new one.
