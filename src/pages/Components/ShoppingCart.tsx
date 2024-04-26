import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
}

interface ShoppingCartProps {
    selectedProducts: Product[];
    alterProducts: (products: Product[]) => void;
    style: { display: string };
}

export default function ShoppingCart({ selectedProducts, alterProducts, style }: ShoppingCartProps) {
    const [isCartEnabled, setCartEnable] = useState<string>(style.display);
    const [productsList, setProducts] = useState<Product[]>(selectedProducts);

    useEffect(() => {
        setCartEnable(style.display);
    }, [style]);

    useEffect(() => {
        setProducts(selectedProducts);
    }, [selectedProducts]);

    useEffect(() => {
        alterProducts(productsList);
    }, [productsList, alterProducts]);

    const removeProduct = (product: Product) => {
        setProducts(productsList.filter(obj => obj.id !== product.id));
        alterProducts(productsList.filter(obj => obj.id !== product.id));
    };

    return (
        <section id="shoppingcart" style={{ display: isCartEnabled }}>
            <header>
                <h2 className="shoppingcart__title">Carrinho de compras</h2>
                <span className="shoppingcart__close" onClick={() => setCartEnable('none')}>X</span>
            </header>
            <ul className="shoppingcart__selectedProducts">
                {productsList.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        remove={() => removeProduct(product)}
                    />
                ))}
            </ul>
            <div className="shoppingcart__total">
                <span>Total: R&#36;798</span>
                <a href="/">Finalizar Compra</a>
            </div>
        </section>
    );
}