import React from "react";
import style from "./Button.module.css";
import arrowIcon from "../assets/right-arrow.svg";

const Button = ({
    label,
    onClick,
    className = "",
    variant = "primary",
    iconPosition = "none", // 'none' | 'left' | 'right'
    link = null // URL string or null
}) => {
    const buttonClass = `${style[variant]} ${className}`;

    const buttonContent = (
        <button
            type="button"
            className={buttonClass}
            onClick={onClick}
        >
            {label}
        </button>
    );

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
            {iconPosition === "left" && (
                <img
                    src={arrowIcon}
                    alt="arrow"
                    className={style.icon}
                />
            )}

            {link ? linkContent : buttonContent}

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
