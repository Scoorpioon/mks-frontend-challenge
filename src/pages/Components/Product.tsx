import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface ProductProperties {
    isLoading: boolean;
    name?: string;
    desc?: string;
    img?: string;
    price?: number;
    selectedProducts: any;
}

interface ProductInfo {
    id: number;
    name?: string;
    price?: number;
    description?: string;
    image?: string;
}

const Product: React.FC<ProductProperties> = (props) => {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(props.isLoading);
    }, [props.isLoading]);

    const productInfo: ProductInfo = {
        id: Math.floor(Math.random() * 999),
        name: props.name,
        price: props.price,
        description: props.desc,
        image: props.img
    }

    return (
        <div>
            {!loading ? (
                <li className="product">
                    <img src={props.img} alt={"Foto de " + props.name} />

                    <div className="product__details">
                        <span className="details__name">{props.name}</span>
                        <span className="details__price">R&#36;{props.price}</span>
                        <span className="details__description">{props.desc}</span>
                    </div>

                    <button onClick={() => props.selectedProducts(productInfo)}><FontAwesomeIcon icon={faShoppingBag} /> Comprar</button>
                </li>
            ) : (
                <motion.div
                    className="product_loading"
                    animate={{
                        backgroundColor: '#cccccc',
                        transition: {duration: 0.5}
                    }}
                >
                </motion.div>
            )}
        </div>
    );
}

export default Product;