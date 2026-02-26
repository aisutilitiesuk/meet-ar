import ServiceTiles from '../components/ServiceTiles';
import HeroContactButtons from '../components/HeroContactButtons';
import DealFlowSection from '../components/DealFlowSection';
import CredibilityStrip from '../components/CredibilityStrip';
import GroupOverview from '../components/GroupOverview';

export default function Home() {
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

              <HeroContactButtons />
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
            <a
              href="https://outlook.office.com/bookwithme/user/beb3f6ea8a2249038fc2457c1c77b5f4@energeyes.me?anonymous&ep=pcard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c32c28] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#a52420] transition-all shadow-lg hover:shadow-xl text-center"
            >
              Book a Meeting
            </a>
            <button
              type="button"
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
