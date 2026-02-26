# Andrew Richards Group Website

A modern, responsive website for Andrew Richards Group showcasing property development, management, construction, utilities, recruitment, and investment services.

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Database**: Supabase
- **Icons**: Lucide React
- **Email Marketing**: Brevo API integration

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

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials

4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy

### Environment Variables

Set the following environment variables in your Vercel project settings:

- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

### Build Settings

Vercel will automatically detect the configuration from `vercel.json`:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite

## Features

- Responsive design across all devices
- Service pages for all business verticals
- Contact form with Supabase and Brevo integration
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
├── pages/         # Page components
├── lib/           # Utilities and configurations
└── main.tsx       # Application entry point
```

## Contact

For more information, visit [andrewrichardsgroup.com](https://andrewrichardsgroup.com)
