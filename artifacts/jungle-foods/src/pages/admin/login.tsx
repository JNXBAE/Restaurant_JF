import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAdminAuth } from '../../hooks/use-admin-auth';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import { Lock, ShieldAlert } from 'lucide-react';
import logoPath from '@assets/jf_1_1784573277911.jpeg';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login, session } = useAdminAuth();
  const [, setLocation] = useLocation();

  // If already logged in, redirect
  if (session) {
    setLocation('/admin');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setLocation('/admin');
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-xl border-border/50 shadow-2xl relative z-10">
        <CardContent className="p-8 sm:p-12 text-center">
          <img src={logoPath} alt="Jungle Foods Logo" className="w-24 h-24 mx-auto rounded-full border-4 border-primary/50 object-cover mb-8" />
          
          <h1 className="text-3xl font-serif font-bold mb-2">Admin Portal</h1>
          <p className="text-muted-foreground mb-8">Authorized personnel only</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input 
                type="password" 
                placeholder="Enter admin password" 
                className="pl-10 h-12 bg-background/50 border-border"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
              />
            </div>
            
            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm justify-center bg-destructive/10 py-2 rounded">
                <ShieldAlert size={16} /> Incorrect password
              </div>
            )}
            
            <Button type="submit" className="w-full h-12 text-lg">Access Dashboard</Button>
          </form>
          
          <div className="mt-8">
            <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              &larr; Return to Website
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
