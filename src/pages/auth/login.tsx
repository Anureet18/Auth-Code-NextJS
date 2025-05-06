//admin/src/pages/auth/login.tsx
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import useAuth from '@/hooks/useAuth';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store';

const LoginPage: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter();

  // React.useEffect(() => {
  //   if (isAuthenticated) {
  //     router.replace('/dashboard');
  //   }
  // }, [isAuthenticated, router]);
  // React.useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     router.replace('/dashboard');
  //   }
  // }, []);

  React.useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard'); // ✅ Redirect after successful login
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex  max-h-screen bg-white-300"> 
      <div className='w-1/2'><img src='/images/frame.png' alt="logo"/></div>
      <div className='w-1/2 flex items-center justify-center' ><LoginForm /></div>
    </div>
  );
};

export default LoginPage;
