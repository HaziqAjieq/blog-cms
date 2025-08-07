import React from "react";
import { useState, useEffect } from "react";

import { SearchBar } from "../../../components/userTableComponent/SearchBar";
import { UserRow } from "../../../components/userTableComponent/UserRow";

import api from "../../../services/api/axios";
import AddUser from "../../../components/userTableComponent/AddUser";

export default function UserManagement() {
  // components/UserTable/UserTable.jsx
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // get all user
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUser();
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true)
  }

  const handleDeleteSuccess = (deletedUserId) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== deletedUserId)
    );
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
     

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onEditClick={() => handleEditClick(user)}
              onDeleteSuccess={handleDeleteSuccess}
            />
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-end flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
        <button 
        onClick={handleAddClick }
        className="mx-10 md:mx-20 bg-green-800 py-3 px-5 rounded-lg text-white font-semibold hover:bg-green-950 transition cursor-pointer">
          Add User
        </button>
        <AddUser
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
        
      </div>

      
    </div>
  );
}

// import user list for the content
