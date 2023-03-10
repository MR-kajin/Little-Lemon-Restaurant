import { Link } from "react-router-dom"

export default function Navigation(props) {
    return (
        <menu className={`navbar-menu ${props.device}`}>
            {props.device === "mobile" ? (
                ""
            ) : (
                <Link to="/">
                    <img
                        src={require("../assets/nav-logo.png")}
                        alt="Liggle Lemon logo"
                        className="nav-image"
                    >
                    </img>
                </Link>
            )}
            <Link className="hoover-effect" to="/">
                <h1>Home</h1>
            </Link>
            <Link className="hoover-effect" to="/about">
                <h1>About</h1>
            </Link>
            <Link >
                <a
                    href={require("../assets/menu.webp")}
                    className="hoover-effect"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h1>Menu</h1>
                </a>
            </Link>
            <Link className="hoover-effect" to="/reservations">
                <h1>Reservations</h1>
            </Link>
            <Link className="hoover-effect" to="/order">
                <h1>Order</h1>
            </Link>
            <Link className="hoover-effect" to="/login">
                <h1>Login</h1>
            </Link>
        </menu>
    );

}