import { useSettings } from '../hooks/use-settings';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const { settings } = useSettings();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary text-glow">Get in Touch</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">We'd love to hear from you. Find us, call us, or drop a message.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold mb-6">Contact Details</h2>
          
          <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="block group">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Call Us</h3>
                  <p className="text-muted-foreground">{settings.phone}</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="bg-card border-border hover:border-[#25D366]/50 transition-all duration-300 h-full">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-14 h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform shrink-0">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-[#25D366] transition-colors">WhatsApp</h3>
                  <p className="text-muted-foreground">Message us for orders</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href={settings.instagramLink} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="bg-card border-border hover:border-pink-500/50 transition-all duration-300 h-full">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-14 h-14 bg-gradient-to-tr from-pink-500/20 via-red-500/20 to-yellow-500/20 rounded-full flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform shrink-0">
                  <Instagram size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-pink-500 transition-colors">Instagram</h3>
                  <p className="text-muted-foreground">Follow our wild journey</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href={`mailto:${settings.email}`} className="block group">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-muted-foreground">{settings.email}</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>

        <div className="space-y-6 flex flex-col">
          <h2 className="text-3xl font-serif font-bold mb-6">Location & Hours</h2>
          
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex items-start gap-6">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-muted-foreground leading-relaxed">{settings.address}</p>
                <a 
                  href={settings.googleMapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:text-primary/80 font-medium underline underline-offset-4"
                >
                  Open in Google Maps
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 flex items-start gap-6">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0 mt-1">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
                <p className="text-muted-foreground">{settings.openingHours}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex-1 bg-muted/30 rounded-xl border border-border flex items-center justify-center min-h-[200px] mt-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 backdrop-blur-[2px]">
               <a 
                  href={settings.googleMapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  View on Map
                </a>
            </div>
            {/* Map placeholder pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
