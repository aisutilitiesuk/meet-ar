import { useState } from 'react';
import { Zap, CheckCircle, Network, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import HeroContactButtons from '../components/HeroContactButtons';
import { submitToBrevo } from '../lib/brevo';

export default function Utilities() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    const brevoResult = await submitToBrevo(
      email,
      {
        NAME: name,
        PHONE: phone,
        ORGANISATION: formData.get('organisation') as string,
        PROJECT_TYPE: formData.get('project_location') as string,
        LOCATION: formData.get('utility_scope') as string,
        ESTIMATED_VALUE: formData.get('estimated_programme') as string,
        NOTES: formData.get('notes') as string,
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
            Utility Infrastructure Delivered at Scale
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            £40m+ secured contract pipeline with integrated in-house traffic management, jointing and civils capability.
          </p>
          <div className="flex flex-col items-center gap-6">
            <HeroContactButtons />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Infrastructure Enquiry
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Framework Discussion
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
            <TrendingUp className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              £40m+ Secured Contracts
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            We operate with a substantial secured pipeline of infrastructure works, delivering multi-utility projects across residential and commercial developments.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-[#213b5b] mb-4">Our focus is on:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Electricity infrastructure',
                'Gas infrastructure',
                'Water infrastructure',
                'Diversions and reinforcement works',
                'New connections and network upgrades',
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 mt-6">
            We provide structured, compliant delivery with commercial oversight.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Network className="text-[#c32c28] mr-4" size={40} />
            <h2 className="text-3xl font-bold text-[#213b5b]">
              Fully Integrated Delivery
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Unlike many infrastructure contractors, we deliver key elements in-house:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Traffic Management', desc: 'Full TM capability and control' },
              { title: 'Jointing', desc: 'Specialist jointing teams' },
              { title: 'Civil Engineering', desc: 'In-house civils delivery' },
              { title: 'Excavation & Reinstatement', desc: 'Complete groundworks' },
              { title: 'Site Coordination', desc: 'Integrated project management' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-[#213b5b] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-6">
            <h4 className="font-semibold text-gray-800 mb-2">This integration reduces:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'Programme risk',
                'Subcontractor dependency',
                'Cost uncertainty',
                'Delays caused by supply chain gaps',
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-700 text-sm">
                  <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-800 font-semibold mt-4">
              It gives clients certainty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Development Infrastructure
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We support:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Residential developers',
              'Housing Associations',
              'Main contractors',
              'Commercial developers',
              'Industrial projects',
              'Mixed-use developments',
            ].map((client) => (
              <div key={client} className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 font-medium">{client}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6">
            Our teams understand the sequencing pressures of live development environments and work closely with clients to maintain programme alignment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Framework & Pipeline Delivery
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We operate within structured contract environments and framework-style delivery models.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-semibold text-[#213b5b] mb-4">Our operational model includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Dedicated project management',
                'Commercial control',
                'Health & safety compliance',
                'Structured reporting',
                'Resource planning',
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 mt-6 font-semibold">
            We are built to deliver repeatable, high-volume infrastructure programmes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            Group Advantage
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Through our wider group structure, we benefit from:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Construction Integration', desc: 'Seamless delivery coordination' },
              { title: 'Recruitment Capability', desc: 'Workforce supply and scaling' },
              { title: 'Facilities Coordination', desc: 'Post-completion support' },
              { title: 'Legal Oversight', desc: 'Contract and compliance support' },
              { title: 'Energy Metering', desc: 'Supply contract capabilities' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-[#213b5b] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border-l-4 border-[#213b5b] p-6 mt-6">
            <p className="text-[#213b5b] font-semibold">
              This creates a vertically integrated infrastructure platform rather than a standalone contractor — a powerful differentiator.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-6">
            What We Undertake
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Multi-utility infrastructure packages',
              'Diversion works',
              'Reinforcement works',
              'ICP connections',
              'Jointing services',
              'Traffic management operations',
              'Civil engineering for utility installation',
            ].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <Zap className="text-[#c32c28] mr-3 flex-shrink-0" size={24} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6 text-center">
            We are particularly suited to developers requiring certainty of delivery and programme reliability.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Why Work With Us
          </h2>
          <p className="text-xl text-center text-gray-700 mb-8">
            Structured. Integrated. Accountable.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-6">We combine:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Secured long-term pipeline',
                'In-house delivery capability',
                'Commercial discipline',
                'Experienced operational leadership',
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-700">
                  <CheckCircle className="text-[#c32c28] mr-3 flex-shrink-0" size={20} />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 font-semibold">
              Our approach reduces risk for clients and ensures continuity of delivery.
            </p>
          </div>
        </div>
      </section>

      <section id="enquiry-form" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#213b5b] mb-8 text-center">
            Discuss Your Infrastructure Requirements
          </h2>
          {success ? (
            <div className="bg-green-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-lg text-center">
              <CheckCircle className="mx-auto mb-2" size={40} />
              <p className="font-semibold">Thank you for your enquiry!</p>
              <p className="text-sm">We'll be in touch to discuss your infrastructure needs.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <FormInput label="Organisation" name="organisation" />
              <FormInput label="Project Location" name="project_location" required />
              <FormInput label="Utility Scope" name="utility_scope" placeholder="e.g., Electricity, Gas, Water" required />
              <FormInput label="Estimated Programme" name="estimated_programme" placeholder="e.g., 6 months, Q2 2026" />
              <FormTextarea label="Additional Notes" name="notes" />
              <FormInput label="Your Name" name="name" required />
              <FormInput label="Phone" name="phone" type="tel" />
              <FormInput label="Email" name="email" type="email" required />
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? 'Submitting...' : 'Request Infrastructure Discussion'}
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
