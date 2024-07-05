// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { GlobalContextProvider } from '@/app/Context/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
};

export default MyApp;
