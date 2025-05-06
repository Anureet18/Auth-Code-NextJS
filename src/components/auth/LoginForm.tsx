'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/store/store';
import { login } from '@/store/auth/authActions';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useRouter } from 'next/router'; // or 'next/navigation' if you're using App Router

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email,password,"check-console")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // const handleRegisterRedirect = () => {
  //   router.push('/auth/register');
  // };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        {/* <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Don’t have an account?</span>
          <Button onClick={handleRegisterRedirect} className="w-full mt-2 bg-gray-900 text-white-700 hover:bg-gray-300">
            Register
          </Button>
        </div> */}
      </form>
    </div>
  );
};

export default LoginForm;
