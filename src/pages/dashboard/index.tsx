import React, { useState, useEffect } from 'react';
import ProtectedRoute from '@/utils/protectedRoute';
import Sidebar from '@/components/layouts/Sidebar';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import axiosInstance from '@/utils/axiosInstance';

const DashboardPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [userCount, setUserCount] = useState<number | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('/dashboard');
      setUserCount(res.data?.data?.users || 0);
    } catch (err) {
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 overflow-y-auto scrollbar-hide">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-6 h-40 animate-pulse">
                  <div className="h-5 bg-gray-300 rounded w-1/2 mb-4"></div>
                  <div className="h-12 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-6 h-40">
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Users</h2>
                  <p className="text-6xl text-align-center font-bold text-indigo-600">{userCount !== null ? userCount : '—'}</p>
                </div>
              </div>
            )}
          </main>
          <Footer />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
