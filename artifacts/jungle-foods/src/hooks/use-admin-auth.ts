import { useLocalStorage } from './use-local-storage';

export function useAdminAuth() {
  const [session, setSession] = useLocalStorage<boolean>('jf_admin_session', false);
  const [password, setPassword] = useLocalStorage<string>('jf_admin_password', 'admin123');

  const login = (input: string) => {
    if (input === password) {
      setSession(true);
      return true;
    }
    return false;
  };

  const logout = () => setSession(false);

  const changePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  return { session, login, logout, changePassword };
}
