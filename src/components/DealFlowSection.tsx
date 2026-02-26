import { useState } from 'react';
import { MapPin, TrendingUp, Hammer } from 'lucide-react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormSelect from './FormSelect';
import Button from './Button';
import { submitToBrevo } from '../lib/brevo';

export default function DealFlowSection() {
  const [activeForm, setActiveForm] = useState<'site' | 'investment' | 'construction' | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSiteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    const result = await submitToBrevo(
      email,
      {
        NAME: name,
        PHONE: phone,
        SITE_LOCATION: formData.get('site_location') as string,
        SITE_SIZE: formData.get('site_size') as string,
        PLANNING_STATUS: formData.get('planning_status') as string,
        EXISTING_USE: formData.get('existing_use') as string,
        GUIDE_PRICE: formData.get('guide_price') as string,
      },
      31
    );

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => {
        setSuccess(false);
        setActiveForm(null);
      }, 3000);
    }
  };

  const handleInvestmentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    const result = await submitToBrevo(
      email,
      {
        NAME: name,
        PHONE: phone,
        OPPORTUNITY_TYPE: formData.get('opportunity_type') as string,
        LOCATION: formData.get('location') as string,
        GDV: formData.get('gdv') as string,
        CAPITAL_REQUIRED: formData.get('capital_required') as string,
        TIMELINE: formData.get('timeline') as string,
      },
      34
    );

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => {
        setSuccess(false);
        setActiveForm(null);
      }, 3000);
    }
  };

  const handleConstructionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    const result = await submitToBrevo(
      email,
      {
        NAME: name,
        PHONE: phone,
        ORGANISATION: formData.get('organisation') as string,
        PROJECT_TYPE: formData.get('project_type') as string,
        LOCATION: formData.get('location') as string,
        ESTIMATED_VALUE: formData.get('estimated_value') as string,
        START_DATE: formData.get('start_date') as string,
        NOTES: formData.get('notes') as string,
      },
      36
    );

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => {
        setSuccess(false);
        setActiveForm(null);
      }, 3000);
    }
  };

  return (
    <section id="deal-flow-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#213b5b] mb-4">
            Deal Flow Capture
          </h2>
          <p className="text-lg text-gray-600">
            Submit your opportunity and we'll get back to you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <button
            onClick={() => setActiveForm(activeForm === 'site' ? null : 'site')}
            className={`p-6 rounded-lg border-2 transition-all ${
              activeForm === 'site'
                ? 'border-[#c32c28] bg-red-50'
                : 'border-gray-200 hover:border-[#213b5b] bg-white'
            }`}
          >
            <MapPin className="mx-auto mb-4 text-[#c32c28]" size={40} />
            <h3 className="text-xl font-semibold text-[#213b5b] mb-2">
              Land & Development
            </h3>
            <p className="text-gray-600 text-sm">Submit a site for consideration</p>
          </button>

          <button
            onClick={() => setActiveForm(activeForm === 'investment' ? null : 'investment')}
            className={`p-6 rounded-lg border-2 transition-all ${
              activeForm === 'investment'
                ? 'border-[#c32c28] bg-red-50'
                : 'border-gray-200 hover:border-[#213b5b] bg-white'
            }`}
          >
            <TrendingUp className="mx-auto mb-4 text-[#c32c28]" size={40} />
            <h3 className="text-xl font-semibold text-[#213b5b] mb-2">
              Investment / JV
            </h3>
            <p className="text-gray-600 text-sm">Discuss partnership opportunities</p>
          </button>

          <button
            onClick={() => setActiveForm(activeForm === 'construction' ? null : 'construction')}
            className={`p-6 rounded-lg border-2 transition-all ${
              activeForm === 'construction'
                ? 'border-[#c32c28] bg-red-50'
                : 'border-gray-200 hover:border-[#213b5b] bg-white'
            }`}
          >
            <Hammer className="mx-auto mb-4 text-[#c32c28]" size={40} />
            <h3 className="text-xl font-semibold text-[#213b5b] mb-2">
              Construction / Utilities
            </h3>
            <p className="text-gray-600 text-sm">Request project discussion</p>
          </button>
        </div>

        {activeForm === 'site' && (
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#213b5b] mb-6">Submit a Site</h3>
            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                Thank you! Your submission has been received. We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSiteSubmit}>
                <FormInput label="Site Location" name="site_location" required />
                <FormInput label="Site Size" name="site_size" placeholder="e.g., 2 acres or 10 units" required />
                <FormSelect
                  label="Planning Status"
                  name="planning_status"
                  required
                  options={[
                    { value: 'Outline Permission', label: 'Outline Permission' },
                    { value: 'Full Permission', label: 'Full Permission' },
                    { value: 'No Permission', label: 'No Permission' },
                    { value: 'Pre-Application', label: 'Pre-Application' },
                  ]}
                />
                <FormInput label="Existing Use" name="existing_use" />
                <FormInput label="Guide Price" name="guide_price" placeholder="Optional" />
                <FormInput label="Your Name" name="name" required />
                <FormInput label="Phone" name="phone" type="tel" />
                <FormInput label="Email" name="email" type="email" required />
                <Button type="submit" fullWidth disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Site Confidentially'}
                </Button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  All enquiries handled discreetly.
                </p>
              </form>
            )}
          </div>
        )}

        {activeForm === 'investment' && (
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#213b5b] mb-6">Investment / JV Enquiry</h3>
            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                Thank you! Your enquiry has been received. We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleInvestmentSubmit}>
                <FormInput label="Opportunity Type" name="opportunity_type" placeholder="e.g., Land JV, Forward Funding" required />
                <FormInput label="Location" name="location" required />
                <FormInput label="GDV (if known)" name="gdv" placeholder="Optional" />
                <FormInput label="Capital Required" name="capital_required" placeholder="Optional" />
                <FormInput label="Timeline" name="timeline" placeholder="Optional" />
                <FormInput label="Your Name" name="name" required />
                <FormInput label="Phone" name="phone" type="tel" />
                <FormInput label="Email" name="email" type="email" required />
                <Button type="submit" fullWidth disabled={loading}>
                  {loading ? 'Submitting...' : 'Discuss Opportunity'}
                </Button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  All enquiries handled discreetly.
                </p>
              </form>
            )}
          </div>
        )}

        {activeForm === 'construction' && (
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#213b5b] mb-6">Construction / Utilities Enquiry</h3>
            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                Thank you! Your enquiry has been received. We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleConstructionSubmit}>
                <FormInput label="Organisation" name="organisation" />
                <FormInput label="Project Type" name="project_type" required />
                <FormInput label="Location" name="location" required />
                <FormInput label="Estimated Value" name="estimated_value" placeholder="Optional" />
                <FormInput label="Start Date" name="start_date" placeholder="Optional" />
                <FormTextarea label="Notes" name="notes" />
                <FormInput label="Your Name" name="name" required />
                <FormInput label="Phone" name="phone" type="tel" />
                <FormInput label="Email" name="email" type="email" required />
                <Button type="submit" fullWidth disabled={loading}>
                  {loading ? 'Submitting...' : 'Request Contact'}
                </Button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  All enquiries handled discreetly.
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
