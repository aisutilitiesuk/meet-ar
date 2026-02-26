# Testing Brevo forms locally

## 1. Safely connect the Brevo API

The Brevo API key is **only** used on the server (local API or Vercel). It never appears in the browser or in git.

**Local testing:**

1. Get your API key from [Brevo → SMTP & API → API Keys](https://app.brevo.com/settings/keys/api).
2. In the project root, create a file named **`.env`** (do not commit it):
   ```env
   BREVO_API_KEY=your_brevo_api_key_here
   ```
3. Verify the connection:
   ```bash
   npm run test:brevo
   ```
   You should see: `Brevo API connection OK. Test contact submitted successfully.`

**Production (Vercel):** Set `BREVO_API_KEY` in Project → Settings → Environment Variables. Do not put it in the repo.

---

## 2. Run the app and API locally

```bash
npm run dev:local
```

This starts:

- **Vite** (e.g. http://localhost:5173) – the app
- **Local API** (http://localhost:3001) – forwards form submissions to Brevo

Forms in the app call `/api/brevo-submit`; Vite proxies that to the local API.

---

## 3. Forms to test

| Page | Form / section | List ID | Brevo list |
|------|----------------|--------|------------|
| **Home** | Deal Flow – Land & Development | 31 | Site Submissions |
| **Home** | Deal Flow – Investment / JV | 36 | Partnership Enquiries |
| **Home** | Deal Flow – Construction / Utilities | 33 | Construction Enquiries |
| **Recruitment** | Request Labour / enquiry form | 35 | Recruitment Enquiries |
| **Construction** | Discuss a Scheme / enquiry form | 33 | Construction Enquiries |
| **Property Management** | Portfolio Review | 34 | Property Management Enquiries |
| **Property Development** | Submit a Site | 31 | Site Submissions |
| **Investment** | Partnership enquiry | 32 | Investment Enquiries |
| **Utilities** | Infrastructure Enquiry | 33 | Construction Enquiries |

Use a real or test email; check the corresponding list in Brevo to confirm the contact was added.

---

## 4. If a form fails

- **“Server configuration error”** – `BREVO_API_KEY` is missing or wrong. Check `.env` (local) or Vercel env vars (production).
- **“Valid email required”** – The email field is invalid or empty.
- **Network error / no response** – Local API not running. Start it with `npm run dev:local` (or `npm run dev:api` in a second terminal).
- **404 on /api/brevo-submit** – Proxy or API URL wrong. Locally use `npm run dev:local` so Vite proxies `/api` to the local server.
