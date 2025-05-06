import React from 'react';
import ForgetPasswordForm from '@/components/auth/ForgetPasswordForm';
import  useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const ForgetPasswordPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ForgetPasswordForm />
    </div>
  );
};

export default ForgetPasswordPage;
