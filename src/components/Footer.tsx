import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#213b5b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Andrew Richards</h3>
            <p className="text-gray-300 text-sm">
              Operating across development, infrastructure and professional services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/property-development" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Property Development
                </Link>
              </li>
              <li>
                <Link to="/property-management" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/construction" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/utilities" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Utilities
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Investment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone size={16} />
                <span>Available on request</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail size={16} />
                <span>Available on request</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin size={16} />
                <span>South Wales</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Andrew Richards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
