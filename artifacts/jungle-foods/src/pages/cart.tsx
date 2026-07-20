import { useCart } from '../hooks/use-cart';
import { useSettings } from '../hooks/use-settings';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Link } from 'wouter';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalItems, subtotal } = useCart();
  const { settings } = useSettings();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    let itemsText = cart.map(item => 
      `- ${item.quantity}x ${item.name} ${item.isMarketPrice ? '(Market Price)' : `(₹${item.price * item.quantity})`}`
    ).join('\n');

    const message = `🌿 *New Order - Jungle Foods* 🌿\n\n*Customer:* ${formData.name}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n\n*Order Details:*\n${itemsText}\n\n*Total Estimate: ₹${subtotal}* ${cart.some(i => i.isMarketPrice) ? '(+ Market Price Items)' : ''}\n\n*Notes:* ${formData.notes || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-3xl text-center">
        <div className="bg-card border border-border rounded-2xl p-12 flex flex-col items-center">
          <div className="w-24 h-24 bg-secondary/30 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag size={40} className="text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Looks like you haven't added any delicious jungle treats to your cart yet.</p>
          <Link href="/menu">
            <Button size="lg" className="gap-2">Explore Menu <ArrowRight size={18} /></Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary">Your Feast</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
              <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-lg">{item.name}</h3>
                  <p className="text-primary font-medium mt-1">
                    {item.isMarketPrice ? 'Market Price' : `₹${item.price}`}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center bg-background border border-border rounded-md">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:text-primary transition-colors disabled:opacity-50"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:text-primary transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <div className="text-right sm:w-24">
                    <p className="font-bold">
                      {item.isMarketPrice ? 'TBD' : `₹${item.price * item.quantity}`}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors ml-2"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="flex justify-between items-center p-6 bg-card rounded-xl border border-border">
            <span className="text-lg font-medium text-muted-foreground">Subtotal ({totalItems} items)</span>
            <span className="text-2xl font-bold text-primary">₹{subtotal}</span>
          </div>
          {cart.some(i => i.isMarketPrice) && (
            <p className="text-sm text-amber-500 italic text-right">*Total excludes Market Price items which will be confirmed on WhatsApp.</p>
          )}
        </div>
        
        <div className="lg:col-span-1">
          <Card className="bg-secondary/20 border-primary/20 sticky top-24">
            <CardContent className="p-6">
              <h3 className="font-serif font-bold text-xl mb-6">Delivery Details</h3>
              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Full Name</label>
                  <Input 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Phone Number</label>
                  <Input 
                    required 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 9876543210" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Delivery Address</label>
                  <Textarea 
                    required 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="Full address with landmark..." 
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Order Notes (Optional)</label>
                  <Textarea 
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Less spicy, extra mayo, etc." 
                    className="min-h-[80px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full mt-6 bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none shadow-[0_0_15px_rgba(37,211,102,0.3)] gap-2">
                  Checkout via WhatsApp <ArrowRight size={18} />
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Clicking checkout will open WhatsApp with your order details pre-filled.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
