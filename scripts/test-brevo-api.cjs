/**
 * Tests the Brevo API connection (local or deployed).
 * Run: node scripts/test-brevo-api.cjs
 * Requires BREVO_API_KEY in .env (local) or set in environment.
 */

try {
  require('dotenv').config();
} catch {}

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const API_BASE = process.env.API_BASE_URL || 'http://localhost:3001';

async function test() {
  console.log('Testing Brevo API connection...\n');
  console.log('API base:', API_BASE);
  console.log('BREVO_API_KEY set:', !!BREVO_API_KEY, BREVO_API_KEY ? '(length ' + BREVO_API_KEY.length + ')' : '');
  console.log('');

  if (!BREVO_API_KEY) {
    console.log('❌ BREVO_API_KEY is not set.');
    console.log('   Create a .env file in the project root with:');
    console.log('   BREVO_API_KEY=your_brevo_api_key_here\n');
    process.exit(1);
  }

  const payload = {
    email: 'test@example.com',
    attributes: { NAME: 'Test User', PHONE: '+440000000000' },
    listId: 31,
  };

  try {
    const res = await fetch(`${API_BASE}/api/brevo-submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));

    if (data?.success === true) {
      console.log('✅ Brevo API connection OK. Test contact submitted successfully.');
      console.log('   (Check your Brevo list 31 for test@example.com)\n');
      return;
    }

    console.log('❌ API returned:', data?.error || data?.message || 'Unknown error');
    if (data?.error?.includes('configuration')) {
      console.log('   Ensure BREVO_API_KEY is set in .env and the local API is running (npm run dev:api).');
    }
    process.exit(1);
  } catch (err) {
    console.log('❌ Request failed:', err.message);
    console.log('   Is the local API running? Start with: npm run dev:local');
    process.exit(1);
  }
}

test();
