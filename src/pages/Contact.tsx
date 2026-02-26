import ContactButtons from '../components/ContactButtons';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#213b5b]">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Multiple ways to connect with Andrew Richards and the team
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactButtons />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-[#213b5b] mb-2">Phone</h3>
              <p className="text-gray-600">Available on request</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-[#213b5b] mb-2">Email</h3>
              <p className="text-gray-600">Available on request</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-[#213b5b] mb-2">Location</h3>
              <p className="text-gray-600">South Wales</p>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#213b5b] mb-4 text-center">
              Business Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#213b5b] mb-2">Primary Operating Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3"></span>
                    South Wales
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3"></span>
                    West Wales
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3"></span>
                    London (JV basis)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#213b5b] mb-2">International Operations</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3"></span>
                    Colombia (EOR)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3"></span>
                    Hungary (EOR)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#c32c28] rounded-full mr-3"></span>
                    Bulgaria, India, Pakistan (EOR)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
