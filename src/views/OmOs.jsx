import style from "./DefaultPage.module.css";
import dialogIcon from "../assets/dialog.svg";
import ProfilBilleder from "../components/ProfilBilleder";

export default function DefaultPage() {
    return (
        <div className={style.main}>
            <section>
                <h3>Hvem er vi</h3>
                <p>Vi er et hold skarpe gutter som er eksperter inden for den seneste estimerings teknologi til hjemmesider. Vi brænder for at skabe en bedre oplevelse for kunder og formindske det generelle energi-forbrug. </p>
                <p>Generelt sørger vi for hele siden er optimeret og kører bedst muligt, så du som virksomhedsejer kan sove trygt uden bekymringer.</p>
            </section>
            <section>
                <img className={style.dialog} src={dialogIcon} alt="dialog ikon" />
            </section>
            <ProfilBilleder />
        </div>
    )
}