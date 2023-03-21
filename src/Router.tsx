import { Route, Routes } from "react-router-dom";
import { BlogPost } from "./pages/Blog/BlogPost";
import { Home } from "./pages/Home/Home";
export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<BlogPost />} />
    </Routes>
  )
}
