import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/public/HomePage";
import About from "./pages/public/About";
import News from "./pages/public/News";
import Platform from "./pages/public/Platform";
import PostDetail from "./pages/public/PostDetail";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      {/* inser mainlayout */}
      <Route element={<MainLayout/>}>
        {/* add other routes includ path in tags*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        {/* will routing through platform id */}
       <Route path="/posts/:slug" element={<PostDetail/>}/>
        <Route path={`/platform/:platformId`} element={<Platform/>}/>
      </Route>

    </Routes>
  </BrowserRouter>);
}

export default App;
