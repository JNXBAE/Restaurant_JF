import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'wouter';
import { useAdminAuth } from '../../hooks/use-admin-auth';
import { useMenu, MenuItem } from '../../hooks/use-menu';
import { useOrders, Order } from '../../hooks/use-orders';
import { useReviews, Review } from '../../hooks/use-reviews';
import { useGallery } from '../../hooks/use-gallery';
import { useSettings } from '../../hooks/use-settings';
import { useToast } from '../../hooks/use-toast';

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { 
  LayoutDashboard, UtensilsCrossed, ClipboardList, Star, 
  Image as ImageIcon, Settings as SettingsIcon, LogOut,
  Plus, Edit, Trash2, CheckCircle, XCircle, X
} from 'lucide-react';

export default function AdminDashboard() {
  const { session, logout, changePassword } = useAdminAuth();
  const [location, setLocation] = useLocation();
  const params = useParams();
  const activeSection = params.section || 'dashboard';

  useEffect(() => {
    if (!session) {
      setLocation('/admin/login');
    }
  }, [session, setLocation]);

  if (!session) return null;

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'menu', label: 'Menu Management', icon: UtensilsCrossed },
    { id: 'orders', label: 'Orders', icon: ClipboardList },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-sidebar border-r border-sidebar-border shrink-0 flex flex-col md:sticky md:top-0 md:h-screen z-20">
        <div className="p-6 border-b border-sidebar-border">
          <h2 className="font-serif font-bold text-2xl text-sidebar-primary">Jungle Admin</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sidebarLinks.map(link => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setLocation(`/admin/${link.id === 'dashboard' ? '' : link.id}`)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  isActive 
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                }`}
              >
                <Icon size={18} />
                {link.label}
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border mt-auto">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => { logout(); setLocation('/'); }}
          >
            <LogOut size={18} className="mr-3" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden relative z-10 bg-background/50">
        {activeSection === 'dashboard' && <DashboardOverview />}
        {activeSection === 'menu' && <MenuManagement />}
        {activeSection === 'orders' && <OrdersManagement />}
        {activeSection === 'reviews' && <ReviewsManagement />}
        {activeSection === 'gallery' && <GalleryManagement />}
        {activeSection === 'settings' && <SettingsManagement />}
      </main>
    </div>
  );
}

// ----------------------------------------------------------------------
// SUB-COMPONENTS FOR EACH SECTION
// ----------------------------------------------------------------------

function DashboardOverview() {
  const { menu } = useMenu();
  const { orders } = useOrders();
  const { reviews } = useReviews();

  const newOrders = orders.filter(o => o.status === 'new').length;
  const pendingReviews = reviews.filter(r => r.status === 'pending').length;

  return (
    <div className="space-y-6 animate-in fade-in">
      <h1 className="text-3xl font-serif font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <ClipboardList size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">New Orders</p>
              <h3 className="text-3xl font-bold">{newOrders}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
              <UtensilsCrossed size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Menu Items</p>
              <h3 className="text-3xl font-bold">{menu.length}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-500">
              <Star size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Reviews</p>
              <h3 className="text-3xl font-bold">{pendingReviews}</h3>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

function MenuManagement() {
  const { menu, addMenuItem, updateMenuItem, deleteMenuItem } = useMenu();
  const { toast } = useToast();
  
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Omit<MenuItem, 'id'>>({
    name: '', category: 'Mandi', description: '', price: 0, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null
  });

  const categories = Array.from(new Set(menu.map(m => m.category)));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updateMenuItem(isEditing, formData);
      toast({ title: "Item updated" });
    } else {
      addMenuItem(formData);
      toast({ title: "Item created" });
    }
    closeForm();
  };

  const closeForm = () => {
    setIsEditing(null);
    setIsCreating(false);
    setFormData({ name: '', category: 'Mandi', description: '', price: 0, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null });
  };

  const editItem = (item: MenuItem) => {
    setFormData(item);
    setIsEditing(item.id);
  };

  if (isEditing || isCreating) {
    return (
      <div className="space-y-6 animate-in fade-in max-w-3xl">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold">{isEditing ? 'Edit Menu Item' : 'New Menu Item'}</h1>
          <Button variant="ghost" onClick={closeForm}><X size={20} /></Button>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <Input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm mb-1">Category</label>
                  <Input required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} list="categories" />
                  <datalist id="categories">{categories.map(c => <option key={c} value={c} />)}</datalist>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Description</label>
                <Textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                  <label className="block text-sm mb-1">Price (₹)</label>
                  <Input type="number" disabled={formData.isMarketPrice} value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} />
                </div>
                <div className="flex items-center gap-2 h-10">
                  <input type="checkbox" id="mp" checked={formData.isMarketPrice} onChange={e => setFormData({...formData, isMarketPrice: e.target.checked})} className="w-4 h-4" />
                  <label htmlFor="mp">Market Price (TBD)</label>
                </div>
              </div>

              <div className="flex gap-6 py-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="veg" checked={formData.isVeg} onChange={e => setFormData({...formData, isVeg: e.target.checked})} className="w-4 h-4" />
                  <label htmlFor="veg">Vegetarian</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="avail" checked={formData.isAvailable} onChange={e => setFormData({...formData, isAvailable: e.target.checked})} className="w-4 h-4" />
                  <label htmlFor="avail">Available</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="feat" checked={formData.isFeatured} onChange={e => setFormData({...formData, isFeatured: e.target.checked})} className="w-4 h-4" />
                  <label htmlFor="feat">Featured</label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Image Upload (Optional)</label>
                <Input type="file" accept="image/*" onChange={handleImageUpload} />
                {formData.image && <img src={formData.image} alt="Preview" className="h-32 mt-2 rounded object-cover border border-border" />}
              </div>

              <Button type="submit" className="w-full mt-4">Save Item</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold">Menu Management</h1>
        <Button onClick={() => setIsCreating(true)}><Plus size={18} className="mr-2" /> Add Item</Button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary/20 text-muted-foreground border-b border-border">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {menu.map(item => (
              <tr key={item.id} className="hover:bg-secondary/5">
                <td className="px-4 py-3 font-medium">{item.name} {item.isVeg && <span className="text-green-500 text-xs">(V)</span>}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.isMarketPrice ? 'Market Price' : `₹${item.price}`}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs ${item.isAvailable ? 'bg-green-500/20 text-green-500' : 'bg-destructive/20 text-destructive'}`}>
                    {item.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => editItem(item)}><Edit size={16} /></Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive" onClick={() => {
                    if (confirm('Delete this item?')) deleteMenuItem(item.id);
                  }}><Trash2 size={16} /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

function OrdersManagement() {
  const { orders, updateOrderStatus } = useOrders();

  return (
    <div className="space-y-6 animate-in fade-in">
      <h1 className="text-3xl font-serif font-bold mb-8">Order History</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-20 bg-card rounded-xl border border-border border-dashed">
          <p className="text-muted-foreground">No orders recorded yet.</p>
          <p className="text-xs text-muted-foreground mt-2">Orders processed via WhatsApp are manually recorded here if needed.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map(order => (
            <Card key={order.id} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4 pb-4 border-b border-border">
                  <div>
                    <h3 className="font-bold text-lg">{order.customerName}</h3>
                    <p className="text-sm text-muted-foreground">{order.phone} | {new Date(order.date).toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select 
                      className="bg-background border border-input rounded p-2 text-sm"
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                    >
                      <option value="new">New</option>
                      <option value="preparing">Preparing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm text-muted-foreground">Order Items</h4>
                    <ul className="text-sm space-y-1">
                      {order.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between">
                          <span>{item.quantity}x {item.name}</span>
                          <span>₹{item.price * item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 pt-2 border-t border-border font-bold flex justify-between">
                      <span>Total</span>
                      <span className="text-primary">₹{order.total}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm text-muted-foreground">Details</h4>
                    <p className="text-sm mb-1"><strong>Address:</strong> {order.address}</p>
                    <p className="text-sm text-amber-500"><strong>Notes:</strong> {order.notes || 'None'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------

function ReviewsManagement() {
  const { reviews, updateReviewStatus, deleteReview } = useReviews();

  return (
    <div className="space-y-6 animate-in fade-in">
      <h1 className="text-3xl font-serif font-bold mb-8">Reviews Management</h1>
      
      <div className="grid gap-4">
        {reviews.length === 0 && <p className="text-muted-foreground">No reviews yet.</p>}
        {reviews.map(review => (
          <Card key={review.id} className={`bg-card border-border ${review.status === 'pending' ? 'border-primary/50 shadow-[0_0_15px_rgba(255,170,0,0.1)]' : ''}`}>
            <CardContent className="p-6 flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted'}`} />
                    ))}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${review.status === 'pending' ? 'bg-amber-500/20 text-amber-500' : 'bg-green-500/20 text-green-500'}`}>
                    {review.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">"{review.text}"</p>
                <p className="text-xs text-muted-foreground mt-2">{new Date(review.date).toLocaleString()}</p>
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                {review.status === 'pending' ? (
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => updateReviewStatus(review.id, 'approved')}>
                    <CheckCircle size={16} className="mr-1"/> Approve
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" onClick={() => updateReviewStatus(review.id, 'pending')}>
                    Hide
                  </Button>
                )}
                <Button size="sm" variant="destructive" onClick={() => {
                  if(confirm('Delete review?')) deleteReview(review.id);
                }}>
                  <Trash2 size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

function GalleryManagement() {
  const { gallery, addImage, removeImage } = useGallery();
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      addImage(url, caption);
      setUrl('');
      setCaption('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      <h1 className="text-3xl font-serif font-bold mb-8">Gallery Management</h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <form onSubmit={handleAdd} className="space-y-4">
            <h3 className="font-bold text-lg">Add New Photo</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Upload Image</label>
                <Input type="file" accept="image/*" onChange={handleFileUpload} />
              </div>
              <div>
                <label className="block text-sm mb-1">Or Image URL</label>
                <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://..." />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Caption (Optional)</label>
              <Input value={caption} onChange={e => setCaption(e.target.value)} placeholder="Beautiful evening..." />
            </div>
            {url && <img src={url} alt="Preview" className="h-32 rounded object-cover border border-border" />}
            <Button type="submit" disabled={!url}>Add to Gallery</Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map(img => (
          <div key={img.id} className="relative group rounded-xl overflow-hidden border border-border aspect-square">
            <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
              <p className="text-xs mb-4 line-clamp-3">{img.caption}</p>
              <Button size="sm" variant="destructive" onClick={() => removeImage(img.id)}>
                <Trash2 size={16} className="mr-1"/> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

function SettingsManagement() {
  const { settings, setSettings } = useSettings();
  const { changePassword } = useAdminAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState(settings);
  const [pwd, setPwd] = useState('');

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSettings(formData);
    toast({ title: "Settings saved successfully" });
  };

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd.length < 6) {
      toast({ title: "Password too short", variant: "destructive" });
      return;
    }
    changePassword(pwd);
    setPwd('');
    toast({ title: "Admin password changed" });
  };

  return (
    <div className="space-y-8 animate-in fade-in max-w-3xl">
      <h1 className="text-3xl font-serif font-bold mb-8">Restaurant Settings</h1>

      <Card>
        <CardHeader><CardTitle>Contact & Info</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={handleSaveSettings} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">WhatsApp Number</label>
                <Input value={formData.whatsappNumber} onChange={e => setFormData({...formData, whatsappNumber: e.target.value})} placeholder="919000000000" />
                <p className="text-xs text-muted-foreground mt-1">Include country code without +</p>
              </div>
              <div>
                <label className="block text-sm mb-1">Display Phone</label>
                <Input value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <Input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm mb-1">Instagram URL</label>
                <Input value={formData.instagramLink} onChange={e => setFormData({...formData, instagramLink: e.target.value})} />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Physical Address</label>
              <Textarea value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
            </div>

            <div>
              <label className="block text-sm mb-1">Google Maps Link</label>
              <Input value={formData.googleMapsLink} onChange={e => setFormData({...formData, googleMapsLink: e.target.value})} />
            </div>

            <div>
              <label className="block text-sm mb-1">Opening Hours</label>
              <Input value={formData.openingHours} onChange={e => setFormData({...formData, openingHours: e.target.value})} />
            </div>

            <Button type="submit">Save Settings</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader><CardTitle className="text-destructive">Security</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={handleSavePassword} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">New Admin Password</label>
              <Input type="password" value={pwd} onChange={e => setPwd(e.target.value)} placeholder="Enter new password" />
            </div>
            <Button type="submit" variant="destructive" disabled={!pwd}>Change Password</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
