import React, { useState } from 'react';
import style from "./Kontakt.module.css";
import Toast from '../components/Toast'; 

export default function KontaktForm() {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Undgå standard form submission
        setShowToast(true); // Vis toast besked
        setTimeout(() => setShowToast(false), 3000); // Gem efter 3s
    };

    return (
        <div className={style.formContainer}>
            <h2 className={style.title}>Send os en henvendelse</h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <input type="email" placeholder="Din email" />
                <input type="text" placeholder="tlf nr:" />
                <input type="text" placeholder="Navn" />
                <input type="text" placeholder="Jobtitel" />
                <input type="text" placeholder="Hjemmeside" />
                <input type="text" placeholder="CMS udbyder" />
                <textarea placeholder="Besked" rows={5}></textarea>
                <button type="submit">SEND HENVENDELSE</button>
            </form>

            {showToast && <Toast message="Din henvendelse er sendt!" onClose={() => setShowToast(false)} />}
        </div>
    )
}