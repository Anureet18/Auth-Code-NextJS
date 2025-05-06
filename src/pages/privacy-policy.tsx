import React from 'react';
import ProtectedRoute from '@/utils/protectedRoute';
import Sidebar from '@/components/layouts/Sidebar';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-4">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
            {/* Add privacy policy content here */}
          </main>
          <Footer />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PrivacyPolicyPage;
