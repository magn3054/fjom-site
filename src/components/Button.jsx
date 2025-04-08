import React from "react";
import style from "./Button.module.css"; // Import af CSS-modul til styling
import arrowIcon from "../assets/right-arrow.svg"; // Import af ikon til knappen

// Button-komponent med props til label, klikfunktion, klasse, variant, ikonplacering og link
const Button = ({
    label,
    className = "",
    variant = "primary",
    iconPosition = "none", // 'none' | 'left' | 'right'
    link = null // URL som string eller null
}) => {
    // Kombinerer styling baseret på variant og ekstra klassenavne
    const buttonClass = `${style[variant]} ${className}`;

    // Indhold hvis knappen ikke er et link
    const buttonContent = (
        <button
            type="button"
            className={buttonClass}
        >
            {label}
        </button>
    );

    // Indhold hvis knappen er et link
    const linkContent = (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonClass} ${style.linkWrapper}`}
        >
            {label}
        </a>
    );

    return (
        <div className={style.buttonWrapper}>
            {/* Viser ikon til venstre for teksten hvis valgt */}
            {iconPosition === "left" && (
                <img
                    src={arrowIcon}
                    alt="arrow"
                    className={style.icon}
                />
            )}

            {/* Viser enten et link eller en almindelig knap */}
            {link ? linkContent : buttonContent}

            {/* Viser ikon til højre for teksten hvis valgt */}
            {iconPosition === "right" && (
                <img
                    src={arrowIcon}
                    alt="arrow"
                    className={`${style.icon} ${style.flipped}`}
                />
            )}
        </div>
    );
};

export default Button;
