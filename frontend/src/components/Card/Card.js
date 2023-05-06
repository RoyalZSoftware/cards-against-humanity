import { useStatus } from 'react'
import './Card.css';


export default function Card({ isWhiteCard, text, onSelectedCallback }) {
    const className = isWhiteCard ? "card white-card" : "card black-card";

    return (
        <div className={className} onClick={onSelectedCallback}>
            {text}
            </div>
    )
}
