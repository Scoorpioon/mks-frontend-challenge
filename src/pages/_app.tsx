import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/globals.scss';
import '@/styles/header.scss';
import '@/styles/products.scss';
import '@/styles/footer.scss';
import '@/styles/shoppingkart.scss';

const API = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api-docs/#/';

// Inicialização do queryclient para o react query
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return(
        <QueryClientProvider client={queryClient} >
          <Component {...pageProps} />
        </QueryClientProvider>
        );
}