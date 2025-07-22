import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const { login, error: authError } = useAuth();

  const validate = () => {
    const errors = {};
    if (!username.trim()) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return ;

    try {
      await login(username, password);
    } catch (err) {
      // Error is already handled in useAuth hook
    }
  };

  return (
    <div className="flex  items-center justify-center">
      
      <form
        method="post"
        onSubmit={handleSubmit}
        className="login-container flex flex-col items-center gap-7 bg-black  w-full  md:w-2/3 lg:w-1/2 h-[460px] text-center rounded-xl"
      >
        <h1 className="mt-10 font-bold text-4xl text-white">Login</h1>
        

        <div className="flex flex-col w-full items-center justify-center gap-3">
          <div className="w-3/4">
            <label className="block mb-1">Username</label>
            <input
              type="text"
              
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="bg-white text-black rounded-lg h-[40px] pl-2  w-3/4"
            />
            {formErrors.username && (
              <p className="text-red-500 text-sm">{formErrors.username}</p>
            )}
          </div>

          <div className="w-3/4">
           <label className="block mb-1">Password</label>
            <input
              type="password"
            
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="bg-white text-black rounded-lg h-[40px] pl-2 w-3/4"
            />
             {formErrors.password && (
            <p className="text-red-500 text-sm">{formErrors.password}</p>
          )}
          </div>

          <button
            type="submit"
            className="text-white bg-green-800 w-1/2 my-8 py-4 rounded-2xl hover:bg-green-900 cursor-pointer transition-colors"
          >
            Login
          </button>
          {authError && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {authError}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
