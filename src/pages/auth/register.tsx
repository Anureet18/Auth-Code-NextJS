import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const RegisterPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

   React.useEffect(() => {
     const token = localStorage.getItem('token');
     if (token) {
       router.replace('/dashboard');
     }
   }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
