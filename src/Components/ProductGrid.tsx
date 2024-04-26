import { useState, useEffect } from 'react';
import { getProducts } from "../pages/api/getProducts";
import { useQuery } from '@tanstack/react-query';
import React from "react";
import Product from "./Product";

interface ProductInfo {
    photo: string;
    name: string;
    price: number;
    description: string;
}

interface ProductGridProps {
    setCart: any;
}

const ProductGrid: React.FC<ProductGridProps> = ({ setCart }) => {
    const [products, setProducts] = useState<any[]>([]);

    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

    const listInsert = (productObj: object) => {
        setProducts([productObj, ...products]);
    }

    useEffect(() => {
        setCart(products);
    }, [products]);

    if (!data) {
        console.log('Carregando componentes...');

        return (
            <div className="productGrid">
                <ul>
                    <Product selectedProducts={null} key={Math.random()} isLoading={true} />
                    <Product selectedProducts={null} key={Math.random()} isLoading={true} />
                    <Product selectedProducts={null} key={Math.random()} isLoading={true} />
                </ul>
            </div>
        );
    } else {
        return (
            <div className="productGrid">
                <ul>
                    {data.products.map((obj: ProductInfo) => (
                        <Product
                            key={Math.random()}
                            isLoading={false}
                            img={obj.photo}
                            name={obj.name}
                            price={obj.price}
                            desc={obj.description}
                            selectedProducts={(products: object) => listInsert(products)}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default ProductGrid;