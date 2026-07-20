import { useLocalStorage } from './use-local-storage';

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  status: 'pending' | 'approved';
};

export function useReviews() {
  const [reviews, setReviews] = useLocalStorage<Review[]>('jf_reviews', []);

  const addReview = (review: Omit<Review, 'id' | 'date' | 'status'>) => {
    const newReview: Review = {
      ...review,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      status: 'pending' // new reviews are pending by default
    };
    setReviews([newReview, ...reviews]);
  };

  const updateReviewStatus = (id: string, status: 'pending' | 'approved') => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status } : r));
  };

  const deleteReview = (id: string) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  const approvedReviews = reviews.filter(r => r.status === 'approved');

  return { reviews, approvedReviews, addReview, updateReviewStatus, deleteReview };
}
