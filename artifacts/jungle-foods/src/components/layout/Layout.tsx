import { Navbar } from './Navbar';
import { FloatingActionBar } from './FloatingActionBar';
import { Link } from 'wouter';
import { useSettings } from '../../hooks/use-settings';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logoPath from '@assets/jf_1_1784573277911.jpeg';

export function Footer() {
  const { settings } = useSettings();
  
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src={logoPath} alt="Jungle Foods" className="w-16 h-16 rounded-full border-2 border-primary object-cover" />
              <div>
                <h3 className="font-serif font-bold text-xl text-primary">JUNGLE FOODS</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Premium Dining</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Step into a lush, vibrant jungle canopy with warm firelight and exotic aromas. A premium dining experience for the whole family.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">Our Menu</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Customer Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{settings.address}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{settings.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{settings.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-foreground">Opening Hours</h4>
            <div className="flex items-start gap-3 text-muted-foreground bg-background p-4 rounded-lg border border-border">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{settings.openingHours}</span>
            </div>
            
            <div className="mt-6">
              <Link href="/admin/login" className="text-xs text-muted-foreground hover:text-primary underline underline-offset-4 opacity-50 hover:opacity-100 transition-opacity">
                Admin Portal
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Jungle Foods. All rights reserved.</p>
          <p>Designed with <span className="text-primary">♥</span></p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col relative overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <FloatingActionBar />
    </div>
  );
}
