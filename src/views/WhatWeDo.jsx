import style from "./DefaultPage.module.css";
import Button from "../components/Button";
import Animation from "../assets/animation.webm";

export default function DefaultPage() {
    return (
        <div className={style.main}>
            <section>
                <h3>Hvem er vi</h3>
                <p>Vi er et hold skarpe gutter som er eksperter inden for den seneste estimerings teknologi til hjemmesider. Vi brænder for at skabe en bedre oplevelse for kunder og formindske det generelle energi-forbrug. </p>
                <p>Generelt sørger vi for hele siden er optimeret og kører bedst muligt, så du som virksomhedsejer kan sove trygt uden bekymringer.</p>
            </section>
            <section>
                <video width="60%" autoPlay muted loop>
                    <source src={Animation} type="video/webm" />
                </video>
            </section>
        </div>
    )
}