import { Link } from "react-router";

function Nav() {
    return (
        <nav className="bg-black text-white py-4 px-10 flex gap-10 md:justify-start justify-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact-us">Contact Us</Link>    
        </nav>
    )
}

export default Nav;