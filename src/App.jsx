import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import ContactUs from "./pages/contact-us.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App