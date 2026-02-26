import { Phone, MessageCircle, Calendar, Download } from 'lucide-react';
import Button from './Button';

interface ContactButtonsProps {
  layout?: 'horizontal' | 'grid';
}

export default function ContactButtons({ layout = 'grid' }: ContactButtonsProps) {
  const handleCall = () => {
    window.location.href = 'tel:+447927586411';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/447927586411', '_blank');
  };

  const handleBookMeeting = () => {
    window.open('https://outlook.office.com/bookwithme/user/beb3f6ea8a2249038fc2457c1c77b5f4@energeyes.me?anonymous&ep=pcard', '_blank');
  };

  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Andrew Richards
ORG:Andrew Richards Group
TITLE:Founder
TEL;TYPE=CELL:+447927586411
EMAIL:andrew@andrewrichardsgroup.com
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Andrew-Richards.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const containerClass = layout === 'grid'
    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
    : 'flex flex-wrap gap-4';

  return (
    <div className={containerClass}>
      <Button
        variant="primary"
        size="lg"
        fullWidth={layout === 'grid'}
        onClick={handleCall}
        className="group"
      >
        <Phone className="mr-2 group-hover:animate-pulse" size={20} />
        Call Andrew
      </Button>

      <Button
        variant="secondary"
        size="lg"
        fullWidth={layout === 'grid'}
        onClick={handleWhatsApp}
        className="group bg-[#25D366] hover:bg-[#1fb855]"
      >
        <MessageCircle className="mr-2 group-hover:animate-pulse" size={20} />
        WhatsApp
      </Button>

      <Button
        variant="outline"
        size="lg"
        fullWidth={layout === 'grid'}
        onClick={handleBookMeeting}
      >
        <Calendar className="mr-2" size={20} />
        Book a Meeting
      </Button>

      <Button
        variant="outline"
        size="lg"
        fullWidth={layout === 'grid'}
        onClick={handleSaveContact}
      >
        <Download className="mr-2" size={20} />
        Save Contact
      </Button>
    </div>
  );
}
