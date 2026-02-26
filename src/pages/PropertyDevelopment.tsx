import { useState } from 'react';
import { MapPin, Handshake, CheckCircle, Building2 } from 'lucide-react';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import HeroContactButtons from '../components/HeroContactButtons';
import { submitToBrevo } from '../lib/brevo';

export default function PropertyDevelopment() {
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
      site_location: formData.get('site_location') as string,
      site_size: formData.get('site_size') as string,
      planning_status: formData.get('planning_status') as string,
      existing_use: formData.get('existing_use') as string,
      guide_price: formData.get('guide_price') as string,
      name,
      phone,
      email,
    };

    const brevoResult = await submitToBrevo(
      email,
      {
        NAME: name,
        PHONE: phone,
        SITE_LOCATION: data.site_location,
        SITE_SIZE: data.site_size,
        PLANNING_STATUS: data.planning_status,
        EXISTING_USE: data.existing_use,
        GUIDE_PRICE: data.guide_price,
      },
      31
    );

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
            Land-Led Property Development
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sourcing, planning and delivering high-quality residential schemes across South Wales — with forward funding partners and JV opportunities in London and South Wales.
          </p>
          <div className="flex flex-col items-center gap-6">
            <HeroContactButtons />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById('submit-site')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Submit a Site
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('jv-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discuss a JV
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('submit-site')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Speak to the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            A Land-Led Development Company
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We identify and acquire land, secure planning permission, structure agreements and oversee the full development lifecycle before handover.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-[#213b5b] mb-4">Our in-house team manages:</h3>
            <ul className="space-y-2">
              {[
                'Land acquisition',
                'Planning and technical design',
                'Housing Association agreements',
                'Construction delivery',
                'Final handover',
                'In-house solicitors and development experts',
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-700">
                  <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700">
            We predominantly deliver new-build developments and the regeneration of brownfield sites, including conversions and refurbishment of existing buildings.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Forward-Funded Housing Association Schemes
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We structure land-led schemes suitable for forward funding by Housing Associations across South Wales.
          </p>
          <p className="text-gray-700 mb-4">
            We manage the risk upfront — land, planning and agreements — before progressing to construction and handover.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-[#213b5b] mb-2">Funding Partners</h4>
              <p className="text-gray-600 text-sm">Certainty and structured delivery</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-[#213b5b] mb-2">Landowners</h4>
              <p className="text-gray-600 text-sm">Clarity and transparent process</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-[#213b5b] mb-2">Housing Associations</h4>
              <p className="text-gray-600 text-sm">Deliverable schemes</p>
            </div>
          </div>
        </div>
      </section>

      <section id="jv-section" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Handshake className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Open to JV Opportunities
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We are actively seeking:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Land-led JV schemes in South Wales',
              'Strategic partnerships in London',
              'Forward funding partnerships',
              'Capital partners for pipeline growth',
            ].map((item) => (
              <li key={item} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mb-6">
            If you control land or capital and want a delivery-focused partner, we are open to structured discussions.
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('submit-site')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss a JV
          </Button>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            What We Are Looking For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#213b5b] mb-4">We Buy:</h3>
              <ul className="space-y-2">
                {[
                  'Greenfield and brownfield land',
                  'Residential or commercial sites',
                  'Sites with or without planning',
                  'Derelict or vacant buildings',
                  'Pubs, clubs, houses and mixed-use sites',
                  'Refurbishment and conversion opportunities',
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <span className="w-1.5 h-1.5 bg-[#c32c28] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#213b5b] mb-4">Locations:</h3>
              <ul className="space-y-2">
                {['West Wales', 'South Wales', 'London (JV basis)'].map((item) => (
                  <li key={item} className="flex items-start text-gray-700">
                    <MapPin className="text-[#c32c28] mr-3 flex-shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Why Sell to Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#213b5b] mb-3">Hassle-Free</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>No unnecessary red tape</li>
                <li>No time-wasters</li>
                <li>Direct decision-makers</li>
                <li>Clear communication</li>
                <li>Solid offers</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#213b5b] mb-3">Fair & Transparent</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Clear calculations</li>
                <li>Development assumptions</li>
                <li>Bespoke deal structures</li>
                <li>Option agreements</li>
                <li>JV opportunities</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#213b5b] mb-3">Clear & Straightforward</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Simple terms</li>
                <li>Transparent expectations</li>
                <li>Full understanding</li>
                <li>Aligned objectives</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 italic">
            If you introduce land that we successfully acquire, a referral fee is available.
          </p>
        </div>
      </section>

      <section id="submit-site" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Submit a Site
          </h2>
          {success ? (
            <div className="bg-green-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-2" size={40} />
              <p className="font-semibold">Thank you for your submission!</p>
              <p className="text-sm">We'll review your site and be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
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
      </section>

      <section className="py-12 bg-[#213b5b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-sm text-gray-300 mb-1">Network</p>
              <p className="font-semibold">South Wales Land Sourcing</p>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Schemes</p>
              <p className="font-semibold">HA Forward-Funded</p>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Capability</p>
              <p className="font-semibold">End-to-End Development</p>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Support</p>
              <p className="font-semibold">In-House Planning & Legal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
