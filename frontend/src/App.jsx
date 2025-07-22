import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/public/HomePage";
import About from "./pages/public/About";
import News from "./pages/public/News";
import Platform from "./pages/public/Platform";
import PostDetail from "./pages/public/PostDetail";
import LoginPage from "./pages/public/authPage/LoginPage";
import UserManagement from "./pages/public/authPage/UserManagement";

import { useAuth } from "./hooks/useAuth";

function ProtectedRoute({ children }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.token ? <Outlet /> : <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* inser mainlayout */}
        <Route element={<MainLayout />}>
          {/* add other routes includ path in tags*/}
          <Route path="/" element={<HomePage />} />

          <Route path="/news/:slug" element={<News />} />
          <Route path="/about" element={<About />} />
          {/* will routing through platform id */}
          <Route path="/posts/:slug" element={<PostDetail />} />
          <Route path={`/platform/:platformId`} element={<Platform />} />

          {/* user Route */}
          <Route path={`/login`} element={<LoginPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>

            <Route path={"/user-management"} element={<UserManagement />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
