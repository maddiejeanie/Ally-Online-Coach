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

import RootLayout from "./Components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>

    <Route path="/about" element={<RootLayout />}>
      <Route index element={<About />} />
    </Route>

    <Route path="/contact" element={<RootLayout />}>
      <Route index element={<Contact />} />
    </Route>

    <Route path="/coaching" element={<RootLayout />}>
      <Route index element={<Coaching />} />
    </Route>

    <Route path="/blog" element={<RootLayout />}>
      <Route index element={<Blog />} />
    </Route>
    </>
  )
);


function App() {
  return <RouterProvider router={router} />
}

export default App