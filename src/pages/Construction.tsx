import { useState } from 'react';
import { Home, Building, CheckCircle, Award } from 'lucide-react';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import HeroContactButtons from '../components/HeroContactButtons';
import { submitToBrevo } from '../lib/brevo';

export default function Construction() {
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
      project_type: formData.get('project_type') as string,
      location: formData.get('location') as string,
      estimated_value: formData.get('estimated_value') as string,
      start_date: formData.get('start_date') as string,
      notes: formData.get('notes') as string,
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
        PROJECT_TYPE: data.project_type,
        LOCATION: data.location,
        ESTIMATED_VALUE: data.estimated_value,
        START_DATE: data.start_date,
        NOTES: data.notes,
      },
      33
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
            High-Volume Housing & Refurbishment Delivery
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Trusted by Housing Associations across South Wales to deliver void programmes, refurbishments and complex schemes at scale.
          </p>
          <div className="flex flex-col items-center gap-6">
            <HeroContactButtons />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discuss a Scheme
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Framework Enquiry
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Speak to the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Home className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Specialist in High-Volume Voids & Refurbishment
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We deliver structured void programmes and refurbishment schemes for Housing Associations across South Wales.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-[#213b5b] mb-4">Our teams are experienced in:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'High-volume void turnaround',
                'Internal and external refurbishment',
                'Planned maintenance programmes',
                'Reactive works',
                'Compliance upgrades',
                'Energy efficiency improvements',
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 mt-6">
            We understand the operational pressure Housing Associations face — and we deliver accordingly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Award className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Trusted by South Wales HAs
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Multiple Housing Associations across South Wales trust us to deliver:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Quality workmanship', desc: 'Skilled trades and attention to detail' },
              { title: 'Reliable turnaround times', desc: 'Programme certainty and predictability' },
              { title: 'Transparent reporting', desc: 'Clear communication at every stage' },
              { title: 'Controlled cost management', desc: 'Budget adherence and value delivery' },
              { title: 'Health & safety compliance', desc: 'Rigorous standards and protocols' },
              { title: 'Established relationships', desc: 'Proven track record with leading HAs' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-[#213b5b] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">
            We operate with structured project management and clear communication to ensure certainty and accountability.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Building className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Complex Refurbishment Experience
            </h2>
          </div>
          <div className="bg-gradient-to-r from-[#213b5b] to-[#2a4968] text-white p-8 rounded-lg mb-6">
            <p className="text-3xl font-bold mb-2">£15m Hotel Refurbishment</p>
            <p className="text-gray-200">Demonstrating capability at scale</p>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Our experience extends beyond housing. We have delivered large-scale refurbishment projects, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '£15m hotel refurbishment',
              'Full internal strip-out and reconfiguration',
              'Phased delivery under live-site constraints',
              'Tight programme management',
              'Coordination of multiple trades',
            ].map((item) => (
              <div key={item} className="flex items-start text-gray-700">
                <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0 mt-1" size={18} />
                {item}
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border-l-4 border-[#213b5b] p-6 mt-6">
            <p className="text-[#213b5b] font-semibold">
              This demonstrates our capability to manage complex, multi-disciplinary projects at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Structured Main Contractor
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We operate with professional systems and processes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Experienced site management',
              'Direct trade relationships',
              'M&E coordination capability',
              'Programme control',
              'Commercial oversight',
              'Health & Safety compliance',
            ].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6 text-center font-semibold">
            We are built to deliver volume without compromising quality.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Integrated Group Advantage
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Through our wider group, we have access to:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Utility infrastructure capability',
              'Civils delivery teams',
              'Traffic management',
              'Jointing services',
              'Recruitment supply',
              'Facilities and post-completion support',
            ].map((item) => (
              <div key={item} className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                {item}
              </div>
            ))}
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-6">
            <p className="text-gray-800 font-semibold">
              This integrated structure reduces delays and supply chain risk — a powerful differentiator.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Void refurbishment programmes',
              'HA internal upgrade programmes',
              'Full residential refurbishments',
              'Commercial refurbishments',
              'Brownfield redevelopment support',
              'Planned maintenance frameworks',
            ].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <CheckCircle className="text-[#c32c28] mr-3" size={24} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6 text-center">
            We are particularly suited to clients requiring structured, repeatable, high-volume delivery.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Why Work With Us
          </h2>
          <p className="text-xl text-center text-gray-700 mb-8">
            Reliable. Structured. Commercial.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-6">
              We are not a small builder. We are an organised delivery partner capable of handling:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Multiple concurrent schemes',
                'Framework-style volume',
                'Commercial reporting',
                'Programme accountability',
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={20} />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 font-semibold">
              We understand cost control and stakeholder communication.
            </p>
          </div>
        </div>
      </section>

      <section id="enquiry-form" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Discuss Your Scheme
          </h2>
          {success ? (
            <div className="bg-green-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-2" size={40} />
              <p className="font-semibold">Thank you for your enquiry!</p>
              <p className="text-sm">We'll be in touch to discuss your project.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
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
