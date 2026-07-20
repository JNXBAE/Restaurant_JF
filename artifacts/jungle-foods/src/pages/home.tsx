import { Link } from 'wouter';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useMenu } from '../hooks/use-menu';
import { useReviews } from '../hooks/use-reviews';
import { Star, ArrowRight, Leaf, Clock, Award, MapPin } from 'lucide-react';

import heroInteriorPath from '@assets/generated_images/hero-interior.jpg';
import promoPath from '@assets/jf_2_1784573277915.jpeg';
import { useSettings } from '../hooks/use-settings';

export default function HomePage() {
  const { menu } = useMenu();
  const { approvedReviews } = useReviews();
  const { settings } = useSettings();

  const signatureMandi = menu.filter(item => item.category === 'Mandi' && item.isFeatured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroInteriorPath} 
            alt="Jungle Foods Interior" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-background/50 backdrop-blur-md">
            <span className="text-primary font-medium tracking-wider text-sm uppercase">Welcome to the wild</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-glow leading-tight">
            Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Jungle</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
            An immersive dining experience serving premium Mandi, Biryani, and exotic flavors in a lush tropical atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/menu">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8">Explore Menu</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-primary/50 text-foreground">Book a Table</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / Story */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">A Feast for the Senses</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Jungle Foods, we don't just serve meals; we serve experiences. Step out of the city and into a lush, vibrant canopy where every dish is an adventure.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our master chefs bring you the authentic taste of slow-cooked Mandi, aromatic Biryani, and sizzling Chinese wok flavors, all prepared with the finest ingredients and secret spice blends.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary hover:text-primary/80 font-bold group">
                Discover our story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img src={promoPath} alt="Jungle Foods Promotion" className="relative rounded-2xl w-full object-cover border border-border shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Mandi */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Pride</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Signature Mandi</h2>
            </div>
            <Link href="/menu">
              <Button variant="outline">View All Dishes</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureMandi.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-border bg-background hover:border-primary/50 transition-all duration-300">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img src={item.image || ''} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif font-bold text-xl mb-1 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-primary font-medium">{item.isMarketPrice ? 'Market Price' : `From ₹${item.price}`}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16">The Jungle Promise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6 border-2 border-primary/20 text-primary">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground">We use only the finest meats, authentic spices, and freshest ingredients for every dish.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6 border-2 border-primary/20 text-primary">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Unique Ambience</h3>
              <p className="text-muted-foreground">Escape the ordinary. Our lush, jungle-themed interiors provide a dining experience like no other.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6 border-2 border-primary/20 text-primary">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Slow Cooked Perfection</h3>
              <p className="text-muted-foreground">Our signature Mandi is slow-cooked for hours to ensure the meat falls off the bone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Teaser */}
      {approvedReviews.length > 0 && (
        <section className="py-24 bg-card/50 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12">What Explorers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {approvedReviews.slice(0, 3).map((review) => (
                <Card key={review.id} className="bg-background border-border text-left p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted'}`} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <div className="font-bold text-sm text-foreground">— {review.name}</div>
                </Card>
              ))}
            </div>
            
            <Link href="/reviews">
              <Button variant="outline">Read All Reviews</Button>
            </Link>
          </div>
        </section>
      )}

      {/* Quick Contact */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for an Adventure?</h2>
            <p className="text-lg text-muted-foreground mb-8">Join us for an unforgettable meal or order online for delivery.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold">Visit Us</div>
                  <div className="text-sm text-muted-foreground">{settings.address}</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="font-bold">Opening Hours</div>
                  <div className="text-sm text-muted-foreground">{settings.openingHours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
