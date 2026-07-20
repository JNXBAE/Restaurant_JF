import { Card, CardContent } from '../components/ui/card';
import { Leaf, Flame, Heart, Users } from 'lucide-react';
import logoPath from '@assets/jf_1_1784573277911.jpeg';
import promoPath from '@assets/jf_2_1784573277915.jpeg';
import { useSettings } from '../hooks/use-settings';

export default function AboutPage() {
  const { settings } = useSettings();

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="relative pt-24 pb-32 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-glow text-primary">Our Story</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Born from a love for authentic spices and wild adventures, Jungle Foods brings the untamed flavors of the world to your plate.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-card border border-border p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-serif font-bold mb-6">Meet Chef Panda</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our beloved mascot, Chef Panda, represents everything Jungle Foods stands for: a deep love for nature, an insatiable appetite for good food, and a warm, welcoming spirit. Just like our Chef Panda, we believe that every meal should be a joyful celebration.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our journey started with a simple idea: to create a dining experience that escapes the concrete jungle and transports you to a lush, flavorful canopy. From our slow-cooked Mandi to our fiery Chinese woks, every dish is crafted with passion.
            </p>
            <div className="flex gap-4 items-center mt-8 p-4 bg-background rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl shrink-0">
                Est.
              </div>
              <div>
                <h4 className="font-bold text-foreground">A Legacy of Taste</h4>
                <p className="text-sm text-muted-foreground">Serving premium quality food to families and food lovers.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img src={logoPath} alt="Chef Panda" className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every dish we serve and every experience we create.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-background border-border text-center hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center text-primary mb-6">
                <Flame size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Authentic Flavors</h3>
              <p className="text-muted-foreground text-sm">We never compromise on spices. Our recipes stay true to their roots, offering genuine taste in every bite.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-background border-border text-center hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center text-primary mb-6">
                <Leaf size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Fresh Ingredients</h3>
              <p className="text-muted-foreground text-sm">Sourced daily, our ingredients ensure that your meal is not just delicious, but wholesome and fresh.</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border text-center hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center text-primary mb-6">
                <Users size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Family First</h3>
              <p className="text-muted-foreground text-sm">Our restaurant is designed to be a haven for families to gather, share, and create lasting memories.</p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border text-center hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center text-primary mb-6">
                <Heart size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Made with Love</h3>
              <p className="text-muted-foreground text-sm">From our kitchen staff to our servers, everything we do is infused with passion and care.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
