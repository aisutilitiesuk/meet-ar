import { Phone, MessageCircle, Calendar, Download } from 'lucide-react';
import ServiceTiles from '../components/ServiceTiles';
import DealFlowSection from '../components/DealFlowSection';
import CredibilityStrip from '../components/CredibilityStrip';
import GroupOverview from '../components/GroupOverview';

export default function Home() {
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
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img
                  src="/AR_NEW_LOGO.jpg"
                  alt="Andrew Richards Logo"
                  className="h-20 w-auto"
                />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-[#213b5b]">
                Andrew Richards
              </h1>

              <p className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
                Founder | Property • Construction • Utilities
              </p>

              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Operating across development, infrastructure and professional services.
              </p>

              <div className="flex flex-col gap-3 w-full max-w-md">
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
                alt="Andrew Richards"
                className="w-full max-w-lg h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceTiles />

      <DealFlowSection />

      <CredibilityStrip />

      <GroupOverview />

      <section className="bg-gradient-to-br from-[#213b5b] to-[#2a4968] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get in touch to discuss opportunities, submit a site, or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = 'https://calendly.com/'}
              className="bg-[#c32c28] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#a52420] transition-all shadow-lg hover:shadow-xl"
            >
              Book a Meeting
            </button>
            <button
              onClick={() => document.getElementById('deal-flow-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#213b5b] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Submit a Site
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
