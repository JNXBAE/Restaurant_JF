import { useState } from 'react';
import { useMenu } from '../hooks/use-menu';
import { useCart } from '../hooks/use-cart';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Search, Plus, Leaf, Flame } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export default function MenuPage() {
  const { menu } = useMenu();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [filter, setFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const categories = ['All', ...Array.from(new Set(menu.map(item => item.category)))];

  const filteredMenu = menu.filter(item => {
    if (!item.isAvailable) return false;
    if (activeCategory !== 'All' && item.category !== activeCategory) return false;
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (filter === 'veg' && !item.isVeg) return false;
    if (filter === 'non-veg' && item.isVeg) return false;
    return true;
  });

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      isMarketPrice: item.isMarketPrice
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary text-glow">The Jungle Menu</h1>
        <p className="text-muted-foreground max-w-2xl">Discover our exquisite range of Arabian, Indian, and Chinese delicacies, prepared with authentic spices and fresh ingredients.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 space-y-8 sticky top-24">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              type="text" 
              placeholder="Search dishes..." 
              className="pl-10 bg-card border-border text-foreground"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Dietary</h3>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setFilter('all')}
                className="flex-1"
              >
                All
              </Button>
              <Button 
                variant={filter === 'veg' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setFilter('veg')}
                className="flex-1 border-green-500/50 hover:bg-green-500/10 text-green-500"
              >
                <Leaf size={14} className="mr-1" /> Veg
              </Button>
              <Button 
                variant={filter === 'non-veg' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setFilter('non-veg')}
                className="flex-1 border-red-500/50 hover:bg-red-500/10 text-red-500"
              >
                <Flame size={14} className="mr-1" /> Non-Veg
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-4 py-2 rounded-md transition-colors ${
                    activeCategory === cat 
                      ? 'bg-primary text-primary-foreground font-bold' 
                      : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Menu Grid */}
        <div className="flex-1 w-full">
          {filteredMenu.length === 0 ? (
            <div className="text-center py-20 bg-card/30 rounded-xl border border-border border-dashed">
              <p className="text-xl text-muted-foreground mb-4">No dishes found matching your criteria.</p>
              <Button variant="outline" onClick={() => {setSearch(''); setFilter('all'); setActiveCategory('All');}}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMenu.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors flex flex-col">
                  {item.image ? (
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      {item.isVeg && (
                        <div className="absolute top-2 right-2 bg-background/80 p-1 rounded backdrop-blur-sm">
                          <div className="w-4 h-4 border-2 border-green-500 flex items-center justify-center rounded-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-32 w-full bg-gradient-to-br from-secondary/40 to-background flex items-center justify-center relative">
                       <span className="font-serif text-2xl text-muted-foreground/30 font-bold px-4 text-center">{item.category}</span>
                       {item.isVeg && (
                        <div className="absolute top-2 right-2 bg-background/80 p-1 rounded backdrop-blur-sm">
                          <div className="w-4 h-4 border-2 border-green-500 flex items-center justify-center rounded-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <CardContent className="p-5 flex-1 flex flex-col pt-5">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="font-serif font-bold text-lg leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="font-bold text-primary shrink-0">
                        {item.isMarketPrice ? 'Market Price' : `₹${item.price}`}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-2">{item.description}</p>
                    
                    <Button 
                      className="w-full mt-auto" 
                      variant="secondary"
                      onClick={() => handleAddToCart(item)}
                    >
                      <Plus size={16} className="mr-2" /> Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
