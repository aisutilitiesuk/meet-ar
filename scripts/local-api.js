/**
 * Local dev server for /api/brevo-submit (same logic as Vercel serverless).
 * Run with: node scripts/local-api.js
 * Requires .env with BREVO_API_KEY, or set BREVO_API_KEY in the environment.
 */

const http = require('http');
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';

// Load .env from project root if dotenv is available
try {
  require('dotenv').config();
} catch {
  // dotenv not installed, use process.env only
}

const PORT = Number(process.env.LOCAL_API_PORT) || 3001;

function send(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  if (req.url !== '/api/brevo-submit' && req.url !== '/api/brevo-submit/') {
    send(res, 404, { error: 'Not found' });
    return;
  }

  if (req.method !== 'POST') {
    send(res, 405, { success: false, error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    send(res, 500, { success: false, error: 'Server configuration error (missing BREVO_API_KEY)' });
    return;
  }

  let body = '';
  for await (const chunk of req) body += chunk;
  let parsed;
  try {
    parsed = JSON.parse(body || '{}');
  } catch {
    send(res, 400, { success: false, error: 'Invalid JSON' });
    return;
  }

  const { email, attributes, listId } = parsed;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    send(res, 400, { success: false, error: 'Valid email required' });
    return;
  }

  if (typeof listId !== 'number') {
    send(res, 400, { success: false, error: 'listId required' });
    return;
  }

  try {
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: attributes ?? {},
        listIds: [listId],
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      send(res, 200, {
        success: false,
        error: data.message || `HTTP ${response.status}: ${response.statusText}`,
      });
      return;
    }

    send(res, 200, { success: true });
  } catch (err) {
    send(res, 200, {
      success: false,
      error: err instanceof Error ? err.message : 'Network error',
    });
  }
});

server.listen(PORT, () => {
  console.log(`Local API running at http://localhost:${PORT}/api/brevo-submit`);
  if (!process.env.BREVO_API_KEY) {
    console.warn('Warning: BREVO_API_KEY not set. Add it to .env or set the env var.');
  }
});
