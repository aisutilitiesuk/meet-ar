import { Phone, MessageCircle, Calendar, Download } from 'lucide-react';

const BOOK_MEETING_URL = 'https://outlook.office.com/bookwithme/user/beb3f6ea8a2249038fc2457c1c77b5f4@energeyes.me?anonymous&ep=pcard';
const PHONE = '+447927586411';
const WHATSAPP_URL = `https://wa.me/${PHONE.replace('+', '')}`;

export default function HeroContactButtons() {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Andrew Richards
EMAIL:ar@andrewrichards.net
TEL;TYPE=CELL:${PHONE}
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
    <div className="flex flex-col gap-3 w-full max-w-md">
      <a
        href={`tel:${PHONE}`}
        className="flex items-center gap-3 px-6 py-3 bg-[#c32c28] text-white rounded-lg hover:bg-[#a02320] transition-colors font-semibold"
      >
        <Phone size={20} />
        <span>Call</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors font-semibold"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
      <a
        href={BOOK_MEETING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-[#213b5b] text-white rounded-lg hover:bg-[#1a2f4a] transition-colors font-semibold"
      >
        <Calendar size={20} />
        <span>Book a Meeting</span>
      </a>
      <button
        type="button"
        onClick={handleSaveContact}
        className="flex items-center gap-3 px-6 py-3 border-2 border-[#213b5b] text-[#213b5b] rounded-lg hover:bg-[#213b5b] hover:text-white transition-colors font-semibold"
      >
        <Download size={20} />
        <span>Save Contact</span>
      </button>
    </div>
  );
}
