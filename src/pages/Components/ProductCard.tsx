import {useState} from 'react';

export default function ProductCard(props) {
    const [quantity, setQuantity] = useState(1);

    const alterQuantity = (mode) => {
        if(mode == 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        } else if(mode == 'increase') {
            setQuantity(quantity + 1);
        }
    }

    return(
        <li className="productcard">
            <span className="productcard__close">X</span>
            <img src={props.image} alt={"Foto de " + props.name} />
            <span className="productcard__name">{props.name}</span>
            <div className="productcard__quantity">
                <span className="decrease" onClick={() => alterQuantity('decrease')}>-</span>
                <span>{quantity}</span>
                <span className="increase" onClick={() => alterQuantity('increase')}>+</span>
            </div>
            <span className="productcard__price">R&#36;{props.price}</span>
        </li>
    );
}