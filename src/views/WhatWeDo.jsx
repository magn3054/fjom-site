import style from "./DefaultPage.module.css";
import IconSeries from "../components/IconSeries";

export default function DefaultPage() {
    return (
        <div className={style.main}>
            <section>
                <h3>Hvad gør vi</h3>
                <p>Vi laver en estimering af din hjemmesides energi-forbrug og identificerer de områder som kan forbedres. Disse forbedringer formindsker hver i sær mængden af energi brugt til at køre siden. </p>
                <p>Dette gør vi kan øge ydeevnen og dermed skabe en bedre oplevelse for dine kunder.</p>
            </section>
            <section>
                <p>Vi bruger den nyeste teknolog til vurdering  af hjemmesidens energi-forbrug. Disse værktøjer sørger for vi har et troværdigt estimat som du kan stole på. Dertil afgiver vi en generel rapport som dine kunder kan læse mere om vores tiltag på.</p>
            </section>
            <IconSeries />
        </div>
    )
}