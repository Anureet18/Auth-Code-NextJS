'use client';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProtectedRoute from '@/utils/protectedRoute';
import Sidebar from '@/components/layouts/Sidebar';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  email: string;
  phoneNumber?: number;
  status?: 'active' | 'inactive';
  subscribed: boolean
}

const TablePage: React.FC = () => {
  const router = useRouter();
  const { tableName } = router.query;

  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(totalUsers / perPage);

  const fetchUsers = async (pageNumber = 1, searchText = '') => {
    try {
      setLoading(true);
      const res = await axios.get(`https://fusha-ai-api.netscapelabs.com/api/v1/admin/users`, {
        params: {
          page: pageNumber,
          perPage,
          search: searchText.trim(),
        },
      });

      const { data, pagination } = res.data;
      setUsers(data);
      setPage(pagination.currentPage);
      setPerPage(pagination.perPage);
      setTotalUsers(pagination.totalUsers);
    } catch (err) {
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tableName === 'users') {
      fetchUsers();
    }
  }, [tableName]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    fetchUsers(1, value); // reset to first page on search
  };

  const handleNext = () => {
    if (page < totalPages) {
      fetchUsers(page + 1, search);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      fetchUsers(page - 1, search);
    }
  };

  const capitalize = (str:any) => str.charAt(0).toUpperCase() + str.slice(1);


  return (
    <ProtectedRoute>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-6 bg-gray-50 overflow-y-auto scrollbar-hide">
            {/* <h1 className="text-2xl font-semibold mb-4 capitalize">{tableName} Table</h1> */}

            {tableName === 'users' && (
              <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-end items-center mb-4">
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={handleSearch}
                    className="border border-gray-300 rounded px-2 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {/* <p className="text-gray-600 text-sm ml-4">
                    Page {page} of {totalPages}
                  </p> */}
                </div>

                <table className="min-w-full table-auto border border-gray-200">
                  <thead className="bg-primary text-white">
                    <tr>
                      {['Name', 'Email', 'Phone', 'Status', 'Subscribed'].map((heading, i) => (
                        <th key={i} className="px-4 py-3 border">{heading}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {loading ? (
                      // [...Array(10)] uses the spread operator (...) to fill it with undefined values, making it iterable like:
                      // [undefined, undefined, ..., undefined] (10 times)
                      // ✅ 1st iteration (i = 0)
                      // Creates a <tr key=0>
                      // Inside that row, creates 5 <td> cells with shimmer

                      [...Array(10)].map((_, i) => (
                        <tr key={i} className="text-center animate-pulse">
                          {/* each iteration generates a <tr> row with 5 <td> cells inside it*/}
                          {[...Array(5)].map((_, j) => (
                            <td key={j} className="border px-4 py-3">
                              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                            </td>
                          ))}
                        </tr>
                      ))
                    ) : users.length > 0 ? (
                      users.map((user) => (
                        <tr key={user._id} className="text-center hover:bg-gray-50 transition">
                          <td className="border px-4 py-3">{capitalize((user.name))}</td>
                          <td className="border px-4 py-3">{user.email}</td>
                          <td className="border px-4 py-3">{user.phoneNumber || '—'}</td>
                          <td className="border px-4 py-3">
                            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
                              {user.status || '—'}
                            </span>
                          </td>
                          <td className="border px-4 py-3">{user.subscribed ? 'Yes' : 'No'}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="text-center py-4 text-gray-500">
                          No users found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <p className="text-sm text-gray-700">
                    Showing {(page - 1) * perPage + 1} to{' '}
                    {Math.min(page * perPage, totalUsers)} of {totalUsers} users
                  </p>
                  <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default TablePage;
