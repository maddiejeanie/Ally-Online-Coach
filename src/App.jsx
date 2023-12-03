import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Coaching from "./Pages/Coaching";
import Blog from "./Pages/Blog"
import IndvBlogPost from './Pages/indvBlogPost.jsx';

import RootLayout from "./Components/RootLayout";
import ClientCheckin from "./Pages/ClientCheckin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="coaching" element={<Coaching />} />
      <Route path="clients" element={<ClientCheckin />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:slug" element={<IndvBlogPost/>} />
    </Route>
  )
);



function App() {
  return <RouterProvider router={router} />
}

export default App