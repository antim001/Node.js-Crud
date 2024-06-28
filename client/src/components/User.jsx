import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setUsers(response.data);
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className='text-center text-2xl font-semibold mb-4'>User Info</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <Link to='/'>
          <h1 className='text-4xl ml-4'><TiUserAdd /></h1>
        </Link>
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
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.fname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <button className="text-blue-600 hover:text-blue-900" onClick={() => deleteUser(user._id)}>
                      <FaTrash className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Link to={`/update/${user._id}`}>
                        <FaEdit className="h-5 w-5" />
                      </Link>
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
