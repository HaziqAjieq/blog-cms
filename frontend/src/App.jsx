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
import PostForm from "./pages/public/authPage/PostForm";

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
        </Route>
        {/* Protected Routes */}

        <Route path="/postform" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
