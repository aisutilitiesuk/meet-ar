import { useState } from 'react';
import { TrendingUp, Shield, Building2, CheckCircle, ExternalLink, Phone, MessageCircle, Calendar, Download } from 'lucide-react';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import { supabase } from '../lib/supabase';
import { submitToBrevo } from '../lib/brevo';

export default function Investment() {
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
      investment_experience: formData.get('investment_experience') as string,
      areas_of_interest: formData.get('areas_of_interest') as string,
      phone,
      email,
    };

    const brevoResult = await submitToBrevo(
      email,
      {
        NAME: name,
        PHONE: phone,
        ORGANISATION: data.organisation,
        INVESTMENT_EXPERIENCE: data.investment_experience,
        AREAS_OF_INTEREST: data.areas_of_interest,
      },
      34
    );

    if (brevoResult.success) {
      await supabase.from('partnership_enquiries').insert([data]);
    }

    setLoading(false);

    if (brevoResult.success) {
      setSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Andrew Richards
EMAIL:ar@andrewrichards.net
TEL;TYPE=CELL:+447927586411
ORG:AIS Utilities
URL:https://andrewrichards.net
ADR;TYPE=WORK:;;;;;;United Kingdom
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'andrew-richards-contact.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#213b5b]">
                Private Capital Partnerships
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We work with family offices, high-net-worth individuals and strategic partners on structured SME opportunities across property, construction and infrastructure.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+447927586411"
                  className="flex items-center gap-3 px-6 py-3 bg-[#c32c28] text-white rounded-lg hover:bg-[#a02320] transition-colors font-semibold"
                >
                  <Phone size={20} />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/447927586411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors font-semibold"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://outlook.office.com/bookwithme/user/beb3f6ea8a2249038fc2457c1c77b5f4@energeyes.me?anonymous&ep=pcard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-[#213b5b] text-white rounded-lg hover:bg-[#1a2f4a] transition-colors font-semibold"
                >
                  <Calendar size={20} />
                  <span>Book a Meeting</span>
                </a>
                <button
                  onClick={handleSaveContact}
                  className="flex items-center gap-3 px-6 py-3 border-2 border-[#213b5b] text-[#213b5b] rounded-lg hover:bg-[#213b5b] hover:text-white transition-colors font-semibold"
                >
                  <Download size={20} />
                  <span>Save Contact</span>
                </button>
              </div>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <img
                src="/meet-andrew-richards.jpg"
                alt="Andrew Richards - AIS Utilities"
                className="w-full max-w-lg h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Building2 className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Our Approach
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We develop and operate businesses and projects across:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Property development',
              'Residential asset management',
              'Construction',
              'Legal Sector',
              'Utilities infrastructure',
              'Workforce services',
            ].map((sector) => (
              <div key={sector} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <CheckCircle className="text-[#c32c28] mr-3" size={24} />
                  <p className="text-gray-700 font-medium">{sector}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">
            We seek aligned capital partners to support selected growth and project opportunities within these sectors.
          </p>
          <p className="text-gray-700 mt-4">
            Our focus is on structured, commercially disciplined ventures with defined delivery oversight.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Who We Work With
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We engage privately with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Family offices', icon: '👨‍👩‍👧‍👦' },
              { title: 'High-net-worth individuals', icon: '💼' },
              { title: 'Strategic co-investors', icon: '🤝' },
              { title: 'Development partners', icon: '🏗️' },
              { title: 'Institutional introducers', icon: '🏦' },
            ].map((partner) => (
              <div key={partner.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">{partner.icon}</div>
                <p className="text-gray-700 font-medium">{partner.title}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border-l-4 border-[#213b5b] p-6 mt-8">
            <p className="text-[#213b5b] font-semibold">
              All discussions are handled discreetly and on a relationship basis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Opportunity Types
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We typically consider partnerships in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Land-led residential development',
              'Forward-funded housing schemes',
              'Infrastructure growth',
              'SME operational expansion',
              'Joint venture structures',
              'Project-level capital participation',
            ].map((opportunity) => (
              <div key={opportunity} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p className="text-gray-700 font-medium">{opportunity}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">
            Each opportunity is structured according to the specific asset, risk profile and partner alignment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Our Platform
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Through our integrated group, we bring:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'In-house land sourcing capability',
              'Construction delivery',
              'Utility infrastructure integration',
              'Recruitment and workforce access',
              'Asset management experience (800+ units)',
              'Established operational pipeline',
            ].map((capability) => (
              <div key={capability} className="flex items-center text-gray-700">
                <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={20} />
                {capability}
              </div>
            ))}
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8">
            <p className="text-gray-800 font-semibold">
              This allows us to control execution rather than rely solely on third parties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Shield className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Alignment
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We prioritise:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Long-term relationships', desc: 'Building sustainable partnerships' },
              { title: 'Transparent structuring', desc: 'Clear and open arrangements' },
              { title: 'Clear commercial modelling', desc: 'Realistic financial projections' },
              { title: 'Defined governance', desc: 'Structured decision-making' },
              { title: 'Responsible capital deployment', desc: 'Prudent investment approach' },
            ].map((value) => (
              <div key={value.title} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-[#213b5b] mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6 font-semibold">
            We are selective in the opportunities we present and in the partners we work with.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6 text-center">
            Current Investment Opportunities
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Explore select opportunities available for qualified investors
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.aisutilities.co.uk/invest/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#213b5b] mb-2">AIS Utilities</h3>
                  <p className="text-gray-600 text-sm">Infrastructure Investment</p>
                </div>
                <ExternalLink className="text-[#c32c28] group-hover:scale-110 transition-transform" size={24} />
              </div>
              <p className="text-gray-700">
                Explore investment opportunities in our utilities infrastructure business.
              </p>
            </a>

            <a
              href="https://investmeducan.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#213b5b] mb-2">Invest Meducan</h3>
                  <p className="text-gray-600 text-sm">Healthcare Investment</p>
                </div>
                <ExternalLink className="text-[#c32c28] group-hover:scale-110 transition-transform" size={24} />
              </div>
              <p className="text-gray-700">
                Discover investment opportunities in healthcare and related sectors.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#213b5b] mb-4">
            Important Notice
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-3">
              <strong>Private Partnership Enquiries Only</strong>
            </p>
            <p className="text-gray-600 text-sm mb-3">
              This page does not constitute an offer to the public.
            </p>
            <p className="text-gray-600 text-sm">
              Any potential opportunity is discussed privately and subject to eligibility, due diligence and formal documentation.
            </p>
          </div>
        </div>
      </section>

      <section id="enquiry-form" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Private Partnership Discussion
          </h2>
          {success ? (
            <div className="bg-green-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-2" size={40} />
              <p className="font-semibold">Thank you for your enquiry!</p>
              <p className="text-sm">We'll be in touch to arrange a confidential discussion.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
              <FormInput label="Name" name="name" required />
              <FormInput label="Organisation (if applicable)" name="organisation" />
              <FormTextarea
                label="Investment Experience"
                name="investment_experience"
                placeholder="Please provide a brief overview of your investment background"
                required
              />
              <FormTextarea
                label="Areas of Interest"
                name="areas_of_interest"
                placeholder="e.g., Property development, Infrastructure, Joint ventures"
                required
              />
              <FormInput label="Phone" name="phone" type="tel" />
              <FormInput label="Email" name="email" type="email" required />
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? 'Submitting...' : 'Request Confidential Discussion'}
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                All enquiries treated in confidence.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
