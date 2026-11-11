import { BrowserRouter, Routes, Route, Link } from "react-router";
import About from "../pages/about.jsx";
import ContactUs from "../pages/contact-us.jsx";

function Home() {
    return (
        <body className="bg-black">
            <div className="flex text-white">
                <BrowserRouter>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact-us">Contact Us</Link>
                    </nav>
                    <Routes>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/contact-us" contact-us={<ContactUs/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </body>
    )
}

export default Home;