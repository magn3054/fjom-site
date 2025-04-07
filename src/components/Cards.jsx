import React from "react";
import style from "./Cards.module.css";
import cardData from "./cardsData.json"; // Import JSON data

// Card Component
const CardContent = ({ title, description, image }) => {
    return (
        <div>
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
            {image && <img src={image} alt="" />}
        </div>
    );
};

const Cards = () => {
    return (
        <div className={style.cardContainer}>
            {cardData.map((card) => (
                <CardContent key={card.id} title={card.title} description={card.description} image={card.image}/>
            ))}
        </div>
    );
};

export default Cards;
