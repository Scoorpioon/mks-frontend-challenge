import { useState, useEffect } from 'react';
import { getProducts } from "../api/getProducts";
import { useQuery } from '@tanstack/react-query';
import React from "react";
import Product from "./Product"

export default function ProductGrid(props) {
    const [products, setProducts] = useState<string>();

    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

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
                    {data.products.map((obj: { photo: string; name: string; price: number; description: string; }) => {return <Product key={Math.random()} isLoading={false} img={obj.photo} name={obj.name} price={obj.price} desc={obj.description} selectedProducts={products => setProducts(products)} />})}

                    {/* <Product key={Math.random()} isLoading={true} /> */}
                </ul>
            </div>
        );
    }
}