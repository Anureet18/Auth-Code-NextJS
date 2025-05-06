// 'use client';

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from '@/store/auth/authActions';
// import Input from '../ui/Input';
// import Button from '../ui/Button';

// const RegisterForm: React.FC = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(register(formData));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
//       <Input
//         label="Name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <Input
//         label="Email"
//         name="email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <Input
//         label="Password"
//         name="password"
//         type="password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />
//       <Button type="submit">Register</Button>
//     </form>
//   );
// };

// export default RegisterForm;

'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/store/store'; // ✅ use this
import { register } from '@/store/auth/authActions';
import Input from '../ui/Input';
import Button from '../ui/Button';

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch(); // ✅ typed dispatch
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <Input
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
