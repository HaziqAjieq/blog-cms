// components/UserTable/UserRow.jsx
import api from "../../services/api/axios";
import { deleteUser } from "../../services/auth";
import { useState } from "react";

export const UserRow = ({ user, onEditClick, onDeleteSuccess }) => {
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await deleteUser(user.id);

        // Check for successful response (2xx status)
        if (response.status >= 200 && response.status < 300) {
          console.log("User deleted successfully!");
          if (onDeleteSuccess) onDeleteSuccess(user.id);
        } else {
          setError(response.data?.message || "Delete failed");
        }
      } catch (error) {
        // Handle different error cases
        if (error.response) {
          switch (error.response.status) {
            case 400:
              setError("Admins cannot delete themselves");
              break;
            case 403:
              setError("Only admins can delete users");
              break;
            case 404:
              setError("User not found");
              break;
            default:
              setError("Failed to delete user");
          }
        } else {
          setError("Network error - please try again");
          console.error("Network error:", error);
        }
      }
    } else {
          console.log("User cancelled deletion");
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="ps-3">
          <div className="text-base font-semibold">{user.username}</div>
        </div>
      </th>
      <td className="px-6 py-4">{user.role}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="font-normal text-gray-500">{user.email}</div>
        </div>
      </td>
      <td className="px-6 py-4 flex flex-col gap-3">
        <div className="flex gap-3 md:gap-8">
          <button
            onClick={onEditClick} // Add onClick handler
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit user
          </button>
          <button
            onClick={handleDelete} // Add onClick handler for delete
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Delete User
          </button>
        </div>
        <div>
          {error && <span className="text-red-500 text-sm ml-2">{error}</span>}
        </div>
      </td>
    </tr>
  );
};
