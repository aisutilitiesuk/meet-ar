import { useState } from 'react';
import { Users, Globe, CheckCircle, Briefcase } from 'lucide-react';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import HeroContactButtons from '../components/HeroContactButtons';
import { submitToBrevo } from '../lib/brevo';

export default function Recruitment() {
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
      organisation: formData.get('organisation') as string,
      sector: formData.get('sector') as string,
      roles_required: formData.get('roles_required') as string,
      location_type: formData.get('location_type') as string,
      duration: formData.get('duration') as string,
      name,
      phone,
      email,
    };

    const brevoResult = await submitToBrevo(
      email,
      {
        NAME: name,
        PHONE: phone,
        ORGANISATION: data.organisation,
        SECTOR: data.sector,
        ROLES_REQUIRED: data.roles_required,
        LOCATION_TYPE: data.location_type,
        DURATION: data.duration,
      },
      35
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
            Construction & Rail Workforce Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Temporary labour, rail staffing and international professional resourcing supported by Employer of Record (EOR) services.
          </p>
          <div className="flex flex-col items-center gap-6">
            <HeroContactButtons />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Labour
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Rail Staffing Enquiry
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                International Resourcing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Users className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Construction & Rail Labour
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We supply skilled labour across:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Civil engineering', icon: '🏗️' },
              { title: 'Utilities', icon: '⚡' },
              { title: 'Main contracting', icon: '👷' },
              { title: 'Housing refurbishment', icon: '🏠' },
              { title: 'Rail infrastructure', icon: '🚂' },
              { title: 'M&E projects', icon: '🔧' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <p className="text-gray-700 font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="font-semibold text-[#213b5b] mb-4">Our network includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Skilled trades',
                'Site supervisors',
                'Engineers',
                'Plant operators',
                'Rail-certified operatives',
                'Commercial and project staff',
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 mt-6">
            All candidates are pre-vetted and compliance-checked prior to placement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Rail Sector Capability
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We support rail and infrastructure contractors with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Safety-critical roles',
              'Trackside operatives',
              'Supervisory staff',
              'Framework labour support',
              'Short-notice mobilisation',
            ].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <CheckCircle className="text-[#c32c28] mr-3" size={24} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">
            We understand the certification and compliance requirements within regulated rail environments.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Globe className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              International Professional Resourcing (EOR)
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Through our international EOR capability operating across:
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Colombia', 'Hungary', 'Bulgaria', 'India', 'Pakistan'].map((country) => (
              <div key={country} className="bg-gradient-to-r from-[#213b5b] to-[#2a4968] text-white px-6 py-3 rounded-full">
                {country}
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We provide compliant employment and payroll solutions for professional roles, allowing UK businesses to scale efficiently without international HR complexity.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            We Specialise In:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Quantity Surveyors', desc: 'Cost management and commercial expertise' },
              { title: 'Bid Writers', desc: 'Tender and proposal specialists' },
              { title: 'M&E Designers', desc: 'Mechanical and electrical design professionals' },
              { title: 'Marketing Professionals', desc: 'Digital and traditional marketing support' },
              { title: 'PA & Administrative Support', desc: 'Executive and office administration' },
            ].map((role) => (
              <div key={role.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <Briefcase className="text-[#c32c28] mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-[#213b5b] mb-2">{role.title}</h4>
                    <p className="text-gray-600 text-sm">{role.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="font-semibold text-[#213b5b] mb-4">These roles support:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'Main contractors',
                'Utilities providers',
                'Developers',
                'Construction SMEs',
                'Infrastructure businesses',
              ].map((client) => (
                <li key={client} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3"></span>
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Why Use Our EOR Model?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Clients benefit from:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Reduced overhead', desc: 'Lower employment costs' },
              { title: 'Wider talent pools', desc: 'Access global professionals' },
              { title: 'Competitive costs', desc: 'Cost-effective resourcing' },
              { title: 'Compliant payroll', desc: 'International compliance' },
              { title: 'Simplified hiring', desc: 'Streamlined process' },
              { title: 'Flexible scaling', desc: 'No long-term risk' },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-[#213b5b] mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8">
            <p className="text-gray-800 font-semibold">
              We manage contracts, payroll and local compliance — allowing clients to focus on delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Cost & Resource Advantage
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-6">Our model enables:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Lower operating costs',
                'Faster team expansion',
                'Structured workforce planning',
                'Reduced recruitment risk',
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={20} />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 font-semibold">
              We provide resource stability without adding permanent overhead.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Who We Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Construction firms',
              'Infrastructure contractors',
              'Utilities providers',
              'Rail operators',
              'Growing SMEs',
              'Established contractors',
            ].map((client) => (
              <div key={client} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-700 font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Group Advantage
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Because we operate within a property, construction and utilities group, we understand:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Tendering pressures',
              'Commercial reporting',
              'Programme management',
              'Technical design requirements',
              'Bid submission deadlines',
            ].map((item) => (
              <div key={item} className="flex items-center text-gray-700">
                <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={18} />
                {item}
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">
            This operational understanding allows us to supply professionals who can integrate immediately.
          </p>
        </div>
      </section>

      <section id="enquiry-form" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Discuss Workforce Requirements
          </h2>
          {success ? (
            <div className="bg-green-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-2" size={40} />
              <p className="font-semibold">Thank you for your enquiry!</p>
              <p className="text-sm">We'll be in touch to discuss your workforce needs.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md border">
              <FormInput label="Organisation" name="organisation" required />
              <FormSelect
                label="Sector"
                name="sector"
                required
                options={[
                  { value: 'Construction', label: 'Construction' },
                  { value: 'Rail', label: 'Rail' },
                  { value: 'Utilities', label: 'Utilities' },
                  { value: 'Infrastructure', label: 'Infrastructure' },
                  { value: 'Other', label: 'Other' },
                ]}
              />
              <FormInput label="Role(s) Required" name="roles_required" required />
              <FormSelect
                label="Location Type"
                name="location_type"
                required
                options={[
                  { value: 'Onsite', label: 'Onsite' },
                  { value: 'Remote', label: 'Remote' },
                  { value: 'Hybrid', label: 'Hybrid' },
                ]}
              />
              <FormInput label="Duration" name="duration" placeholder="e.g., 6 months, permanent" />
              <FormInput label="Your Name" name="name" required />
              <FormInput label="Phone" name="phone" type="tel" />
              <FormInput label="Email" name="email" type="email" required />
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? 'Submitting...' : 'Request Discussion'}
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                All enquiries handled professionally and confidentially.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
