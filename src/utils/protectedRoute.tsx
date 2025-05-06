//High Order Component
// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';

// const ProtectedRoute = (WrappedComponent: React.ComponentType<any>) => {
//   const Wrapper = (props: any) => {
//     const router = useRouter();
//     const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);

//     useEffect(() => {
//       const localToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//       if (!localToken || !token || !isAuthenticated) {
//         router.replace('/login');
//       }
//     }, [isAuthenticated, token, router]);

//     return <WrappedComponent {...props} />;
//   };

//   return Wrapper;
// };

// export default ProtectedRoute;

// // /utils/protectedRoute.tsx
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const token = useSelector((state: RootState) => state.auth.token);
//   const router = useRouter();

//   useEffect(() => {
//     if (!token) {
//       router.replace('/');
//     }
//   }, [token, router]);

//   if (!token) return null;

//   return <>{children}</>;
// };

// export default ProtectedRoute;

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); // ensures it only renders on client

    if (!token) {
      router.replace('/'); // or '/login'
    }
  }, [token, router]);

  if (!isMounted || !token) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
