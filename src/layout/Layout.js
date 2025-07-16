import { Navbar } from "../navbar/Navbar";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Home } from   "../pages/Home";
import { About } from "../pages/About";
import { Shop } from "../pages/Shop";
import { Blog } from "../pages/Blog";

export function Layout() {
  return (
    <div>
      <BrowserRouter>
    
      <div>
        <Navbar />
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}
