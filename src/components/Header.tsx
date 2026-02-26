import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/AR_NEW_LOGO.jpg"
              alt="Andrew Richards"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-[#c32c28]' : 'text-[#213b5b] hover:text-[#c32c28]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/property-development"
              className={`text-sm font-medium transition-colors ${
                isActive('/property-development') ? 'text-[#c32c28]' : 'text-[#213b5b] hover:text-[#c32c28]'
              }`}
            >
              Property Development
            </Link>
            <Link
              to="/property-management"
              className={`text-sm font-medium transition-colors ${
                isActive('/property-management') ? 'text-[#c32c28]' : 'text-[#213b5b] hover:text-[#c32c28]'
              }`}
            >
              Property Management
            </Link>
            <Link
              to="/construction"
              className={`text-sm font-medium transition-colors ${
                isActive('/construction') ? 'text-[#c32c28]' : 'text-[#213b5b] hover:text-[#c32c28]'
              }`}
            >
              Construction
            </Link>
            <Link
              to="/utilities"
              className={`text-sm font-medium transition-colors ${
                isActive('/utilities') ? 'text-[#c32c28]' : 'text-[#213b5b] hover:text-[#c32c28]'
              }`}
            >
              Utilities
            </Link>
            <Link
              to="/recruitment"
              className={`text-sm font-medium transition-colors ${
                isActive('/recruitment') ? 'text-[#c32c28]' : 'text-[#213b5b] hover:text-[#c32c28]'
              }`}
            >
              Recruitment
            </Link>
            <Link
              to="/investment"
              className={`text-sm font-medium transition-colors ${
                isActive('/investment') ? 'text-[#c32c28]' : 'text-[#213b5b] hover:text-[#c32c28]'
              }`}
            >
              Investment
            </Link>
            <Link
              to="/contact"
              className="bg-[#c32c28] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#a52420] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-[#213b5b]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-[#213b5b] font-medium">
              Home
            </Link>
            <Link to="/property-development" className="block text-[#213b5b] font-medium">
              Property Development
            </Link>
            <Link to="/property-management" className="block text-[#213b5b] font-medium">
              Property Management
            </Link>
            <Link to="/construction" className="block text-[#213b5b] font-medium">
              Construction
            </Link>
            <Link to="/utilities" className="block text-[#213b5b] font-medium">
              Utilities
            </Link>
            <Link to="/recruitment" className="block text-[#213b5b] font-medium">
              Recruitment
            </Link>
            <Link to="/investment" className="block text-[#213b5b] font-medium">
              Investment
            </Link>
            <Link
              to="/contact"
              className="block bg-[#c32c28] text-white px-6 py-2 rounded-md text-sm font-medium text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
