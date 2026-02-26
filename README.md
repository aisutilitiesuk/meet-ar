# Andrew Richards Group Website

A modern, responsive website for Andrew Richards Group showcasing property development, management, construction, utilities, recruitment, and investment services.

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Email / leads**: Brevo (via Vercel serverless API)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) For local API testing, copy `.env.example` to `.env` and add `BREVO_API_KEY`. For full local form testing, run `npx vercel dev` so the `/api/brevo-submit` route is available.

4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add **BREVO_API_KEY** in Vercel project → Settings → Environment Variables
4. Deploy

See **DEPLOY.md** for a step-by-step guide.

### Build Settings

Vercel will use `vercel.json`:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite

## Features

- Responsive design across all devices
- Service pages for all business verticals
- Contact forms with Brevo integration (API key kept server-side)
- Direct contact options (Call, WhatsApp, Book Meeting, Save Contact)
- Deal flow information section
- Credibility strip with key metrics

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/          # Page components
├── lib/            # Utilities (e.g. Brevo API client)
└── main.tsx        # Application entry point
api/
└── brevo-submit.ts # Vercel serverless function (Brevo proxy)
```

## Contact

For more information, visit [andrewrichardsgroup.com](https://andrewrichardsgroup.com)
