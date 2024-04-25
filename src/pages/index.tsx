import { HydrationBoundary, QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query";
import {useState, useEffect } from 'react';
import { getProducts } from "./api/getProducts";
import ProductGrid from "./Components/ProductGrid";
import ShoppingCart from "./Components/ShoppingCart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Home() {
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

  return (
    <>
      <Header /* productsAmount={''} */ />
      <main>
      <QueryClientProvider client={client}>
        <ProductGrid />
        {/* <ShoppingCart selectedProducts={''} /> */}
      </QueryClientProvider>
      </main>
      <Footer />
    </>
  );
}

/* Desenvolvido para MKS por Gabriel A. Nascimento */