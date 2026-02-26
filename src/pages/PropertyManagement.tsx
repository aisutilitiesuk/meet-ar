import { useState } from 'react';
import { Building, Zap, Wrench, Shield, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import { supabase } from '../lib/supabase';
import { submitToBrevo } from '../lib/brevo';

export default function PropertyManagement() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    const data = {
      name,
      organisation: formData.get('organisation') as string,
      asset_type: formData.get('asset_type') as string,
      number_of_units: formData.get('number_of_units') as string,
      location: formData.get('location') as string,
      phone,
      email,
    };

    const brevoResult = await submitToBrevo(
      email,
      {
        NAME: name,
        PHONE: phone,
        ORGANISATION: data.organisation,
        ASSET_TYPE: data.asset_type,
        NUMBER_OF_UNITS: data.number_of_units,
        LOCATION: data.location,
      },
      33
    );

    if (brevoResult.success) {
      await supabase.from('property_management_enquiries').insert([data]);
    }

    setLoading(false);

    if (brevoResult.success) {
      setSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#213b5b]">
            Professional Residential Asset Management
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Over 800 properties under management across South Wales — with integrated billing, legal, energy and facilities capability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Portfolio Enquiry</Button>
            <Button size="lg" variant="secondary">Switch to Us</Button>
            <Button
              size="lg"
              variant="outline"
            >
              Speak to the Team
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Building className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              800+ Properties Under Management
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We manage a substantial residential portfolio including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              'Traditional residential lettings',
              'Build-to-Rent (BTR) schemes',
              'PBSA (Purpose-Built Student Accommodation)',
              'Multi-unit blocks',
              'Developer handovers',
            ].map((item) => (
              <div key={item} className="flex items-center text-gray-700">
                <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={20} />
                {item}
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            Our scale allows structured, process-driven management with commercial oversight.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            BTR & PBSA Billing Management
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We provide structured billing management for institutional-grade assets:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-[#213b5b] mb-4">Asset Types:</h3>
              <ul className="space-y-2">
                {[
                  'Build-to-Rent developments',
                  'PBSA schemes',
                  'Multi-unit residential blocks',
                  'Mixed-use assets',
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#c32c28] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-[#213b5b] mb-4">Services Include:</h3>
              <ul className="space-y-2">
                {[
                  'Rent billing & collection',
                  'Utilities recharge management',
                  'Service charge administration',
                  'Energy cost allocation',
                  'Tenant ledger reporting',
                  'Arrears monitoring & recovery',
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#c32c28] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-[#213b5b] p-6 mt-6">
            <p className="text-[#213b5b] font-semibold">
              This is a major differentiator. We position ourselves as capable of handling operational complexity — not just ASTs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Zap className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Integrated Energy Brokerage
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Through our group capabilities, we support portfolio-level energy management:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Energy procurement', desc: 'Competitive rates' },
              { title: 'Utility onboarding', desc: 'Seamless setup' },
              { title: 'Metering coordination', desc: 'Accurate billing' },
              { title: 'Cost optimisation', desc: 'Reduce expenses' },
              { title: 'Bulk purchasing', desc: 'Volume discounts' },
              { title: 'Multi-asset support', desc: 'BTR, PBSA, HMOs' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#213b5b] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">
            This drives cost efficiency and investor performance across your portfolio.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Wrench className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Integrated Facilities Management
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We provide comprehensive facilities management services:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              'Communal cleaning',
              'Deep cleaning',
              'Reactive repairs',
              'Planned maintenance',
              'Contractor coordination',
              'Compliance servicing',
              'Common area management',
              'Post-completion support',
            ].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-gray-700 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <p className="text-gray-800">
              <strong>One accountable operator.</strong> Landlords and asset owners deal with one company — not three separate contractors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Shield className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Legal & Compliance Advantage
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Unlike standard managing agents, we have access to in-house legal expertise across the group.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-[#213b5b] mb-4">This supports:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Tenancy enforcement',
                'Correct service of notices',
                'Compliance documentation',
                'Commercial structuring',
                'Portfolio advice',
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-700">
                  <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 mt-6 font-semibold">
            Risk reduction is one of our core value drivers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Who We Act For
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Portfolio landlords',
              'Institutional investors',
              'Developers',
              'BTR operators',
              'PBSA asset owners',
              'Overseas investors',
            ].map((client) => (
              <div key={client} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-700 font-medium">{client}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <p className="text-[#213b5b] font-semibold mb-2">
              We are particularly suited to clients requiring:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'Structured reporting',
                'Billing oversight',
                'Facilities integration',
                'Multi-asset management',
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Why Switch to Us
          </h2>
          <p className="text-xl text-center text-gray-700 mb-8">
            Structured. Commercial. Accountable.
          </p>
          <p className="text-center text-gray-600 mb-8">
            We operate as a residential asset management platform — not a high-street lettings shop.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['Scalable infrastructure', 'Integrated billing systems', 'Facilities management capability'],
              ['Energy brokerage', 'Legal access', 'Commercial mindset'],
              ['Professional transition', 'Minimal disruption', 'Experienced team'],
            ].map((group, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2">
                  {group.map((benefit) => (
                    <li key={benefit} className="flex items-start text-gray-700 text-sm">
                      <CheckCircle className="text-[#c32c28] mr-2 flex-shrink-0 mt-0.5" size={16} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Request a Portfolio Review
          </h2>
          {success ? (
            <div className="bg-green-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-2" size={40} />
              <p className="font-semibold">Thank you for your enquiry!</p>
              <p className="text-sm">We'll be in touch to arrange a discussion.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <FormInput label="Name" name="name" required />
              <FormInput label="Organisation (if applicable)" name="organisation" />
              <FormSelect
                label="Asset Type"
                name="asset_type"
                required
                options={[
                  { value: 'Residential', label: 'Residential' },
                  { value: 'BTR', label: 'Build-to-Rent (BTR)' },
                  { value: 'PBSA', label: 'PBSA' },
                  { value: 'Mixed', label: 'Mixed Use' },
                ]}
              />
              <FormInput label="Number of Units" name="number_of_units" required />
              <FormInput label="Location" name="location" required />
              <FormInput label="Phone" name="phone" type="tel" />
              <FormInput label="Email" name="email" type="email" required />
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? 'Submitting...' : 'Arrange Discussion'}
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                Confidential and obligation-free.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
