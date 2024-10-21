'use client';


import { useState } from 'react';
import Navbar from './Navbar';

export default function TestNavbar() {
  const [userRole, setUserRole] = useState<'visitor' | 'user' | 'admin'>('visitor');

  return (
    <div>
      <div className="p-4">
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Selecciona el rol del usuario:
        </label>
        <select
          id="role"
          name="role"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value as 'visitor' | 'user' | 'admin')}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="visitor">Visitor</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <Navbar userRole={userRole} />
    </div>
  );
}