const BREVO_API_KEY = 'REDACTED';
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';

interface BrevoAttributes {
  [key: string]: string | undefined;
}

export async function submitToBrevo(
  email: string,
  attributes: BrevoAttributes,
  listId: number
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes,
        listIds: [listId],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}
