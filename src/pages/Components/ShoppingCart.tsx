import ProductCard from "./ProductCard";

export default function ShoppingCart() {
    return(
        <section id="shoppingcart">
            <header>
                <h2 className="shoppingcart__title">Carrinho de compras</h2>
                <span className="shoppingcart__close">X</span>
            </header>
            <ul className="shoppingcart__selectedProducts">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ul>
            <div className="shoppingcart__total">
                <span>Total: 798</span>
                <a href="">Finalizar Compra</a>
            </div>
        </section>
    );
}