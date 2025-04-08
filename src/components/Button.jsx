import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import style from "./Button.module.css"; // Import af CSS-modul til styling
import arrowIcon from "../assets/right-arrow.svg"; // Import af ikon til knappen

// Button-komponent med props til label, klikfunktion, klasse, variant, ikonplacering og link
const Button = ({
    label,
    link = "#",
    className = "",
    variant = "primary",
    iconPosition = "none", // 'none' | 'left' | 'right'
}) => {
    // Kombinerer styling baseret på variant og ekstra klassenavne
    const buttonClass = `${style[variant]} ${className}`;
    
    // funktioner der håndterer externt eller internt link
    const goToExternal = () => {
        window.location.href = link;
    };
    const navigate = useNavigate();
    const goToInternal = () => {
        navigate(link);
    };

    // Knappens indhold hvor onclick funktion bestemmes af linket givet
    const buttonContent = (
        <button
            type="button"
            className={buttonClass}
            onClick={link.startsWith("/") ? goToInternal : goToExternal}
        >
            {label}
        </button>
    );

    // det her er hvad vi får når <Button /> bliver kaldt i de andre filer
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

            {buttonContent}

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
