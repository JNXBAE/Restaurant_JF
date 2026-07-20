import { useState } from 'react';
import { useReviews } from '../hooks/use-reviews';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Star, MessageSquareQuote } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export default function ReviewsPage() {
  const { approvedReviews, addReview } = useReviews();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    text: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    addReview(formData);
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback! Your review is pending approval.",
    });
    setFormData({ name: '', rating: 5, text: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary text-glow">Explorer Tales</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Read what our guests have to say about their Jungle Foods experience, or share your own adventure.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <Card className="bg-card/50 border-primary/20 sticky top-24">
            <CardContent className="p-6">
              <h3 className="font-serif font-bold text-2xl mb-6">Leave a Review</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Your Name</label>
                  <Input 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star className={`w-8 h-8 ${star <= formData.rating ? 'fill-primary text-primary drop-shadow-[0_0_8px_rgba(255,170,0,0.5)]' : 'text-muted-foreground/30'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5 text-muted-foreground">Your Experience</label>
                  <Textarea 
                    required 
                    value={formData.text}
                    onChange={(e) => setFormData({...formData, text: e.target.value})}
                    placeholder="Tell us about the food and ambiance..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full mt-2">Submit Review</Button>
                <p className="text-xs text-muted-foreground text-center mt-4">Reviews are moderated to prevent spam.</p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {approvedReviews.length === 0 ? (
            <div className="text-center py-20 bg-card border border-border rounded-xl">
              <MessageSquareQuote size={48} className="mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-xl text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            approvedReviews.map((review) => (
              <Card key={review.id} className="bg-background border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted-foreground/20'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
