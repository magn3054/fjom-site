import { Link } from "react-router-dom";
// import mystyle from "./Header.module.css";

export default function Header() {

    return (
        <header>
            <nav>
                <p>
                    <Link to="/">Home</Link>
                </p>
                <p>
                    <Link to="/second">Second page</Link>
                </p>
            </nav>
        </header>
    )
}