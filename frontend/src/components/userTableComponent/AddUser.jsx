import React, { useState } from "react";
import { register } from "../../services/auth";

export default function AddUser({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType , setMessageType] = useState("");
  const [role , setRole] = useState('editor')

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({username, email, password , role});
     
      setUsername("");
      setEmail("");
      setPassword("");
      setRole("editor"); // Reset to default
      setMessage("User created successfully!");
      setMessageType("sucess")

        setTimeout(() => {
        onClose();
        setMessage("");
      }, 2000);

    } catch (error) {
      console.log(error);
      setMessage(error.response?.data?.message || 'Registration failed.')
      setMessageType("error")
    }
  };

  return (
    <div
      id="addUserModal"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <form
          // handle submit to create new user
          onSubmit={handleSubmit}
          className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700"
        >
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add User
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              {/* Form fields go here */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value) }
                  type="text"
                  id="first-name"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value) }
                  type="email"
                  id="first-name"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie"
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value) }
                  type="password"
                  id="first-name"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie"
                  required
                />
              </div>

              {/* changing role */}
              <div className="col-span-2 ">
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Role
                </label>

                <div class="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700 mb-4">
                  <input
                    id="admin"
                    type="radio"
                    value="admin"
                    name="role"
                    class="w-6 h-4 "
                    checked={role === 'admin'}
                    onChange={handleRoleChange }
                  />
                  <label
                    for="bordered-radio-1"
                    class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Admin
                  </label>
                </div>
                <div class="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700">
                  <input
                    id="bordered-radio-2"
                    type="radio"
                    value="editor"
                    name="role"
                    class="w-6 h-4 "
                    checked={role === 'editor'}
                     onChange={handleRoleChange }
                  />
                  <label
                    for="bordered-radio-2"
                    class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Editor
                  </label>
                </div>
              </div>
              
            </div>

            {
              message && (
                messageType === 'sucess' ? <span className="bg-green-50 text-green-700 border border-green-200">
                  {message}
                </span> :
                <span className="bg-green-50 text-red-700 border border-green-200">
                  {message}
                </span>
              )
            }
              
              

            <div className="flex items-center  p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save all
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
