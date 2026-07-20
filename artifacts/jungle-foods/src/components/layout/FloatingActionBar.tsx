import { MessageCircle, Phone, Instagram } from 'lucide-react';
import { useSettings } from '../../hooks/use-settings';

export function FloatingActionBar() {
  const { settings } = useSettings();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a 
        href={settings.instagramLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
      <a 
        href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} 
        className="bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      <a 
        href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
