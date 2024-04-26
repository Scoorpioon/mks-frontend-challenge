import { useState, useEffect } from 'react';
import { getProducts } from "../api/getProducts";
import { useQuery } from '@tanstack/react-query';
import React from "react";
import Product from "./Product"

export default function ProductGrid({setCart}) {
    const [products, setProducts] = useState<any[]>([]);

    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

    const listInsert = (productObj: object) => {
        setProducts([productObj, ...products]);
    }

    useEffect(() => {
        setCart(products);
        /* products.map((obj) => console.log(obj)); */
    }, [products]);

    if(!data) {
        console.log('Carregando componentes...');

        return(
            <div className="productGrid">
                <ul>
                    <Product key={Math.random()} isLoading={true} />
                    <Product key={Math.random()} isLoading={true} />
                    <Product key={Math.random()} isLoading={true} />
                </ul>
            </div>
        );
    } else {
        return(
            <div className="productGrid">
                <ul>
                    {data.products.map((obj: { photo: string; name: string; price: number; description: string; }) => {return <Product key={Math.random()} isLoading={false} img={obj.photo} name={obj.name} price={obj.price} desc={obj.description} selectedProducts={(products: object) => listInsert(products)} />})}

                    {/* <Product key={Math.random()} isLoading={true} /> */}
                </ul>
            </div>
        );
    }
}