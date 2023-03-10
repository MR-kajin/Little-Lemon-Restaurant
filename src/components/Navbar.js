import { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";


function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    function handleToggle() {
        setNavbarOpen(!navbarOpen)
    }

return (
    <nav>
        <nav className='burger'>
            <img
            src= {require("../assets/nav-logo.png") }
            alt="Little Lemon logo"
            className="nav-image"
            />

            <button className="burger-icon" onClick={handleToggle}>
                <img src={navbarOpen ? Close : Hamburger} alt="Navigation bar" />
            </button>
            <Navigation device="Desktop"/>
            {navbarOpen ? <Navigation device="mobile" /> : ""}
        </nav>
    </nav>
)
}
export default Navbar;