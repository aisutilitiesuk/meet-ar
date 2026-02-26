import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDevelopment from './pages/PropertyDevelopment';
import PropertyManagement from './pages/PropertyManagement';
import Construction from './pages/Construction';
import Utilities from './pages/Utilities';
import Recruitment from './pages/Recruitment';
import Investment from './pages/Investment';
import Contact from './pages/Contact';
import DownloadCSV from './pages/DownloadCSV';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property-development" element={<PropertyDevelopment />} />
            <Route path="/property-management" element={<PropertyManagement />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/download-csv" element={<DownloadCSV />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
