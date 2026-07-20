import { useLocalStorage } from './use-local-storage';

export type Order = {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  notes: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  date: string;
  status: 'new' | 'preparing' | 'completed' | 'cancelled';
};

export function useOrders() {
  const [orders, setOrders] = useLocalStorage<Order[]>('jf_orders', []);

  const addOrder = (order: Omit<Order, 'id' | 'date' | 'status'>) => {
    const newOrder: Order = {
      ...order,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      status: 'new'
    };
    setOrders([newOrder, ...orders]);
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
  };

  return { orders, addOrder, updateOrderStatus };
}
