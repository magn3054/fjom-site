import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import style from "./Button.module.css";
import arrowIcon from "../assets/right-arrow.svg"; 

// Button-komponent med props til label, link, klasse, variant, ikonplacering og navigation
export default function Button({
    label,
    link = "#",
    className = "",
    variant = "primary", // 'primary' | 'secondary'
    iconPosition = "none", // 'none' | 'left' | 'right'
}) {
    // Kombinerer styling baseret på variant og ekstra klassenavne
    const buttonClass = `${style[variant]} ${className}`;

    // Funktion til ekstern navigation
    const goToExternal = () => {
        window.location.href = link;
    };

    // Funktion til intern navigation
    const navigate = useNavigate();
    const goToInternal = () => {
        navigate(link);
    };

    // Knappens indhold  // vælger onclick-funktion baseret på om linket er internt eller eksternt
    const buttonContent = (
        <button
            type="button"
            className={buttonClass}
            onClick={link.startsWith("/") ? goToInternal : goToExternal}
        >
            {label}
        </button>
    );

    // Returnerer wrpper med eventuelt ikon og knapindhold
    return (
        <div className={style.buttonWrapper}>
            {/* Viser ikon til venstre for teksten hvis vgt */}
            {iconPosition === "left" && (
                <img
                    src={arrowIcon}
                    alt="knappe-pil"
                    className={style.icon}
                />
            )}

            {buttonContent}

            {/* Viser ikon til højre for teksten hvis valgt */}
            {iconPosition === "right" && (
                <img
                    src={arrowIcon}
                    alt="kanppe-pil"
                    className={`${style.icon} ${style.flipped}`}
                />
            )}
        </div>
    )
}
