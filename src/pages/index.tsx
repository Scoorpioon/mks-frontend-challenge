import { HydrationBoundary, QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query";
import {useState, useEffect } from 'react';
import { getProducts } from "./api/getProducts";
import ProductGrid from "./Components/ProductGrid";
import ShoppingCart from "./Components/ShoppingCart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartEnabled, setCartEnable] = useState<boolean>(false);

  const enableCart = () => {
    setCartEnable(!isCartEnabled);
  }

  const alterList = (list: Array<object>) => {
    console.log(list);
  }

  return (
    <>
      <Header productsAmount={cart.length} isCartEnabled={enableCart} />
      <main>
        <ProductGrid setCart={setCart} />
        <ShoppingCart selectedProducts={cart} alterProducts={() => alterList} style={isCartEnabled ? {display: 'block'} : {display: 'none'}} />
      </main>
      <Footer />
    </>
  );
}

/* Desenvolvido para MKS por Gabriel A. Nascimento */

/*

const [client] = useState(new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnReconnect: false
      }
    }
  }));

  useEffect(() => {
    async function fetchData() {
      await client.prefetchQuery({
        queryKey: ["products"],
        queryFn: getProducts
      });
    }

    fetchData();
  });

<QueryClientProvider client={client}>

    <ProductGrid setCart={setCart} />
    <ShoppingCart selectedProducts={cart} isEnabled={cartEnabled} />
</QueryClientProvider>

*/