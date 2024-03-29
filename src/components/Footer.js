import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <menu>
                <li className="img-footer">
                    <img
                        src={require("../assets/footer-logo.png")}
                        alt="Little Lemon logo"
                    />
                </li>

                <li className="contact">
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <a
                            href={require("../assets/menu.webp")}
                            target="_blank"
                            rel="noreferrer"
                        >Menu
                        </a>
                        <Link to="/reservation">Reservations</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contacts</h1>
                    <ul className="footer-links">
                        <li>2395 Maldove Way,</li>
                        <li>Chicago Illinoi</li>
                        <br></br>
                        <li>(629)-243-6827</li>
                        <a
                            href="mailto: info@littlelemon.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            info@littlelemon.com
                        </a>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Connect</h1>
                    <ul className="footer-links">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://goo.gl/maps/wUtf2SSURGz2re647"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join us!
                        </a>
                    </ul>
                </li>
            </menu>
        </footer>
    )
}