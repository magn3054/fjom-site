import style from "./Footer.module.css";
import Button from "../components/Button";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

export default function Footer() {

    return (
        <footer>
            <section>
                <div className={style.footerButton}>
                    <Button label="Kontakt" onClick={() => { }} variant="primary" />
                </div>
            </section>
            <section className={style.SoMe}>
                <a href="https://www.facebook.com/" className={style.iconLink}>
                    <img src={Facebook} alt="facebook" />
                    <span className={style.label}>Facebook</span>
                </a>
                <a href="https://www.linkedin.com/feed/" className={style.iconLink}>
                    <img src={Linkedin} alt="linkedin" />
                    <span className={style.label}>LinkedIn</span>
                </a>
                <a href="https://github.com/magn3054/fjom-site" className={style.iconLink}>
                    <img src={Github} alt="github" />
                    <span className={style.label}>GitHub</span>
                </a>
            </section>
            <section className={style.policy}>
                <p>&copy; 2025 FJOM - Digitalt ansvar fra start til klik</p>
                <p>Alle rettigheder forbeholdes</p>
                <p>Privatlivspolitik og juridisk</p>
            </section>
        </footer>
    )
}