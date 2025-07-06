import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/public/HomePage";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      {/* inser mainlayout */}
      <Route element={<MainLayout/>}>
        {/* add other routes includ path in tags*/}
        <Route path="/" element={<HomePage />} />
      </Route>

    </Routes>
  </BrowserRouter>);
}

export default App;
