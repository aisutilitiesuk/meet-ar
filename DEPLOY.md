# Deploy to Vercel

Follow these steps to deploy **meet-ar** to Vercel (free plan).

---

## 1. Push your code to GitHub

Make sure your project is in the **aisutilitiesuk/meet-ar** repo and push the latest changes:

```bash
git add -A
git status
git commit -m "Prepare Vercel deployment"
git push origin main
```

---

## 2. Import the project in Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use your GitHub account).
2. Click **Add New…** → **Project**.
3. Select **aisutilitiesuk/meet-ar** (or the repo you’re using).
4. Vercel will detect:
   - **Framework:** Vite  
   - **Build Command:** `npm run build`  
   - **Output Directory:** `dist`  
   Leave these as-is unless you changed them.
5. **Do not click Deploy yet** — set environment variables first (step 3).

---

## 3. Set environment variables

Before the first deploy, add this in the Vercel project:

1. In the import screen, open **Environment Variables** (or after creating the project: **Settings** → **Environment Variables**).
2. Add:

| Name | Value | Where |
|------|--------|--------|
| `BREVO_API_KEY` | Your Brevo API key | Production (and Preview if you use it) |

- **BREVO_API_KEY** is used only by the serverless function (`/api/brevo-submit`); it is never sent to the client.

3. Save.

---

## 4. Deploy

1. Click **Deploy** (or trigger a new deploy from the **Deployments** tab).
2. Wait for the build to finish. The first run may take 1–2 minutes.
3. Open the generated URL (e.g. `https://meet-ar-xxx.vercel.app`). Your app and the `/api/brevo-submit` route will be live.

---

## 5. After deploy

- **Forms:** All form submissions go to Brevo via the serverless function; the API key stays on the server.
- **Custom domain (optional):** In the project: **Settings** → **Domains** → add your domain and follow the DNS instructions.
- **Redeploys:** Every push to `main` (or your production branch) will trigger a new deployment.

---

## Troubleshooting

| Issue | What to do |
|-------|------------|
| Build fails | Check the build log in Vercel; ensure `npm run build` works locally. |
| Forms don’t submit / “Server configuration error” | Add or correct **BREVO_API_KEY** in Vercel → Settings → Environment Variables, then redeploy. |
| 404 on `/api/brevo-submit` | Confirm `api/brevo-submit.ts` is in the repo and that you redeployed after adding it. |
