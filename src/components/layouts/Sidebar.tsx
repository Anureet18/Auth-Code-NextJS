'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Users', path: '/tables/users' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ];

  return (
    <div className="w-64 h-screen bg-primary text-white p-4 flex flex-col">
      <div className="flex items-center justify-start mb-4">
        <img src="/images/logo.png" alt="Logo" width={80} height={80} />
      </div>
      <nav className="flex-1 space-y-2 text-md font-semibold">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-3 rounded-md transition duration-200 ${
                isActive
                  ? 'bg-white text-primary shadow font-bold'
                  : 'hover:bg-white hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
