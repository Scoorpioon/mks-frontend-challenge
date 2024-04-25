import {useState} from 'react';

export default function ProductCard() {
    const [quantity, setQuantity] = useState(1);

    return(
        <li className="productcard">
            <img src="" alt="Foto do produto" />
            <span>Nome do produto</span>
            <div className="productcard__quantity">
                <span className="decrease" onClick={() => setQuantity(quantity - 1)}>-</span>
                <span>{quantity}</span>
                <span className="increase" onClick={() => setQuantity(quantity + 1)}>+</span>
            </div>
            <span className="productcard__price">397</span>
        </li>
    );
}