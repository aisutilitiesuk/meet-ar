/**
 * Tests all 9 Brevo forms by sending one request per form to the API.
 * Run: node scripts/test-all-forms.cjs
 * Requires: BREVO_API_KEY in .env, local API running (npm run dev:api or npm run dev:local).
 */

try {
  require('dotenv').config();
} catch {}

const API_BASE = process.env.API_BASE_URL || 'http://localhost:3001';

const FORMS = [
  { name: '1. Recruitment (enquiry)', listId: 35, attributes: { NAME: 'Test', PHONE: '0', ORGANISATION: 'Test', SECTOR: 'Construction', ROLES_REQUIRED: 'Test', LOCATION_TYPE: 'Onsite', DURATION: '6 months' } },
  { name: '2. Construction (enquiry)', listId: 33, attributes: { NAME: 'Test', PHONE: '0', ORGANISATION: 'Test', PROJECT_TYPE: 'Test', LOCATION: 'Test', ESTIMATED_VALUE: '', START_DATE: '', NOTES: '' } },
  { name: '3. Property Management (portfolio)', listId: 34, attributes: { NAME: 'Test', PHONE: '0', ORGANISATION: 'Test', ASSET_TYPE: 'Residential', NUMBER_OF_UNITS: '1', LOCATION: 'Test' } },
  { name: '4. Property Development (submit site)', listId: 31, attributes: { NAME: 'Test', PHONE: '0', SITE_LOCATION: 'Test', SITE_SIZE: '1', PLANNING_STATUS: 'Outline Permission', EXISTING_USE: '', GUIDE_PRICE: '' } },
  { name: '5. Investment (partnership)', listId: 32, attributes: { NAME: 'Test', PHONE: '0', ORGANISATION: 'Test', INVESTMENT_EXPERIENCE: 'Test', AREAS_OF_INTEREST: 'Test' } },
  { name: '6. Utilities (infrastructure)', listId: 33, attributes: { NAME: 'Test', PHONE: '0', ORGANISATION: 'Test', PROJECT_TYPE: 'Test', LOCATION: 'Test', ESTIMATED_VALUE: '', NOTES: '' } },
  { name: '7. Deal Flow – Land & Development', listId: 31, attributes: { NAME: 'Test', PHONE: '0', SITE_LOCATION: 'Test', SITE_SIZE: '1', PLANNING_STATUS: 'Outline Permission', EXISTING_USE: '', GUIDE_PRICE: '' } },
  { name: '8. Deal Flow – Investment / JV', listId: 36, attributes: { NAME: 'Test', PHONE: '0', OPPORTUNITY_TYPE: 'Test', LOCATION: 'Test', GDV: '', CAPITAL_REQUIRED: '', TIMELINE: '' } },
  { name: '9. Deal Flow – Construction / Utilities', listId: 33, attributes: { NAME: 'Test', PHONE: '0', ORGANISATION: 'Test', PROJECT_TYPE: 'Test', LOCATION: 'Test', ESTIMATED_VALUE: '', START_DATE: '', NOTES: '' } },
];

async function testForm(index) {
  const form = FORMS[index];
  const email = `form${index + 1}-test-${Date.now()}@test.local`;
  const payload = { email, attributes: form.attributes, listId: form.listId };
  const res = await fetch(`${API_BASE}/api/brevo-submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  return { name: form.name, success: data?.success === true, error: data?.error };
}

async function main() {
  console.log('Testing all 9 Brevo forms...\n');
  console.log('API base:', API_BASE);
  console.log('BREVO_API_KEY set:', !!process.env.BREVO_API_KEY);
  console.log('');

  let passed = 0;
  let failed = 0;

  for (let i = 0; i < FORMS.length; i++) {
    try {
      const result = await testForm(i);
      if (result.success) {
        console.log('✅', result.name);
        passed++;
      } else {
        console.log('❌', result.name);
        console.log('   ', result.error || 'Unknown error');
        failed++;
      }
    } catch (err) {
      console.log('❌', FORMS[i].name);
      console.log('   ', err.message);
      failed++;
    }
  }

  console.log('');
  console.log('---');
  console.log(`Passed: ${passed}/${FORMS.length}`);
  if (failed > 0) {
    console.log(`Failed: ${failed}`);
    process.exit(1);
  }
  console.log('All forms OK.');
}

main();
