import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <h2>
                <Link to="/">Contact Book</Link>
            </h2>

            <nav>
                <Link to="/">Contacts</Link>
                {" | "}
                <Link to="/new">Add Contact</Link>
            </nav>
        </header>
    );
}

export default Header;