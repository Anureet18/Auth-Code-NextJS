// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';

// const Navbar: React.FC = () => {
//   const router = useRouter();
  
//   return (
//     <div className="flex justify-end items-center gap-6">
//       <div className="text-lg font-semibold">Admin</div>
//       <button
//         onClick={() => {router.push('/');localStorage.removeItem("token")}}
//         className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// // export default Navbar;
// 'use client';

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import {logoutUser} from '@/store/auth/authActions'; // adjust path if needed

// const Navbar: React.FC = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleLogout = () => {
//     dispatch(logoutUser()); // ✅ Clears Redux + localStorage
//     router.push('/');       // ✅ Redirect to homepage or login
//   };

//   return (
//     <div className="flex justify-end items-center gap-6">
//       <div className="text-lg font-semibold">Admin</div>
//       <button
//         onClick={handleLogout}
//         className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Navbar;

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/store';
import { logoutUser } from '@/store/auth/authActions'; // or wherever you have it

const Navbar: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());  // ✅ dispatch redux logout
    router.push('/');        // ✅ redirect to login/home
  };

  return (
    <div className="flex justify-end items-center gap-6">
      <div className="text-lg font-semibold">Admin</div>
      <button
        onClick={handleLogout}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
