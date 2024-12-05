import React from 'react';
import './memory.css'

const Card = ({ card, onClick }) => (
    <div
        className={`card ${card.flipped ? 'flipped' : ''}`}
        onClick={onClick}
    >
        <div className="card-inner">
            {/* Parte delantera: imagen */}
            <div className="card-front">
                <img src={card.image} alt="memory card" />
            </div>
            {/* Parte trasera: signo de interrogación */}
            <div className="card-back">?</div>
        </div>
    </div>
);

export default Card;
