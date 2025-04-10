import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Logo from "../assets/fjom-logo.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
    useEffect(() => {}, [useLocation().pathname]); // Sørger for at komponenten gen-renderes ved ændring i URL-sti

    return (
        <header>
            <Link to="/"><img className={style.logo} src={Logo} alt="Logo" /></Link>
            <nav>
                <ul>
                    {/* checker om location passer med linket og tilføjer en special klasse dertil, ellers tilføjes ingen */} {/* statement ? true : false */}
                    <li className={location.pathname === "/omos" ? style.active : ""}>
                        <Link to="/omos">Om os</Link>
                    </li>
                    <li className={location.pathname === "/whatwedo" ? style.active : ""}>
                        <Link to="/whatwedo">Hvad vi gør</Link>
                    </li>
                    <li className={location.pathname === "/kontakt" ? style.active : ""}>
                        <Link to="/kontakt">Henvendelse</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

