import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Layout } from './components/layout/Layout';
import HomePage from './pages/home';
import MenuPage from './pages/menu';
import CartPage from './pages/cart';
import AboutPage from './pages/about';
import GalleryPage from './pages/gallery';
import ReviewsPage from './pages/reviews';
import ContactPage from './pages/contact';
import AdminLogin from './pages/admin/login';
import AdminDashboard from './pages/admin/index';

import { seedData } from './lib/seed';
import { useEffect } from 'react';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/reviews" component={ReviewsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/:section" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    seedData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
