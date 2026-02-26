export interface BrevoAttributes {
  [key: string]: string | undefined;
}

/**
 * Submits contact data to Brevo via the Vercel serverless API route.
 * The Brevo API key is only stored in Vercel env vars and used on the server;
 * it is never sent to the client.
 */
export async function submitToBrevo(
  email: string,
  attributes: BrevoAttributes,
  listId: number
): Promise<{ success: boolean; error?: string }> {
  try {
    const base = import.meta.env.VITE_API_BASE_URL ?? '';
    const res = await fetch(`${base}/api/brevo-submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, attributes, listId }),
    });
    const data = await res.json().catch(() => ({}));

    if (data?.success === true) return { success: true };
    return { success: false, error: (data?.error as string) ?? 'Request failed' };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Network error',
    };
  }
}
