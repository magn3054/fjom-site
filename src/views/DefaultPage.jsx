import style from "./DefaultPage.module.css";
import Button from "../components/Button";
import Animation from "../assets/animation.webm";

export default function DefaultPage() {
    return (
        <div className={style.main}>
            <section>
                <h3>Energi-optimering</h3>
                <p>I FJOM stræber vi efter at optimerer din hjemmeside med præcision og troværdighed. Vores team er klar til at lave en energi-vudering af din hjemmesides og finde de områder vi kan forbedre, formindske og optimerer.</p>
                <p>Hvis din virksomhed er klar til at tage det næste skridt og sætte fokus på energi-optimering, så send os en henvendelse </p>
                <Button label="Primary Button" link="https://www.facebook.com/" variant="primary" iconPosition="right"/>
            </section>
            <section>
                <video width="60%" autoPlay muted loop>
                    <source src={Animation} type="video/webm" />
                </video>
            </section>
            <section>
            </section>
            <section>
                <h3>Hvorfor?</h3>
                <p>Hvorfor i al verden skal du energi-optimere din hjemmeside?</p>
                <p>Ja det er et rigtig godt spørgsmål. Det første er helt simpelt fordi det forbedrer din hjemmeside funktionalitet og ydeevne hvilket forbedre brugeoplevelsen. Det bruger mindre strøm hvilket jo altid er godt!</p>
            </section>
        </div>
    )
}