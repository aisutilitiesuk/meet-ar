import type { VercelRequest, VercelResponse } from '@vercel/node';

const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: 'Server configuration error' });
  }

  const body = req.body as { email?: string; attributes?: Record<string, string | undefined>; listId?: number };
  const { email, attributes, listId } = body ?? {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Valid email required' });
  }

  if (typeof listId !== 'number') {
    return res.status(400).json({ success: false, error: 'listId required' });
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
      return res.status(200).json({
        success: false,
        error: data.message || `HTTP ${response.status}: ${response.statusText}`,
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(200).json({
      success: false,
      error: err instanceof Error ? err.message : 'Network error',
    });
  }
}
