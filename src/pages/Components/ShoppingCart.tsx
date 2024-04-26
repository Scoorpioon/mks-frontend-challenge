import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ShoppingCart({selectedProducts, style}) {
    const [isCartEnabled, setCartEnable] = useState(style.display);

    useEffect(() => {
        setCartEnable(style.display);
    }, [style]);

    return(
        <section id="shoppingcart" style={{display: isCartEnabled}}>
            <header>
                <h2 className="shoppingcart__title">Carrinho de compras</h2>
                <span className="shoppingcart__close" onClick={() => setCartEnable('none')}>X</span>
            </header>
            <ul className="shoppingcart__selectedProducts">
                {selectedProducts.map((product: object) => {
                    return <ProductCard image={product.image} name={product.name} price={product.price} />}
                )}
            </ul>
            <div className="shoppingcart__total">
                <span>Total: R&#36;798</span>
                <a href="/">Finalizar Compra</a>
            </div>
        </section>
    );
}