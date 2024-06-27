import React from 'react';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import {Link} from 'react-router-dom'
const users = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
  // Add more users as needed
];

const User = () => {
  return (
    <div className="container mx-auto mt-10">
        <h1 className='text-center text-2xl font-semibold mb-4'>User Info</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <Link to='/adduser'><h1  className='text-4xl ml-4 '> < TiUserAdd/></h1></Link>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <button className="text-blue-600 hover:text-blue-900">
                      <FaTrash className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FaEdit className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
