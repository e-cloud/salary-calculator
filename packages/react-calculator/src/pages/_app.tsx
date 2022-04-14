import '../styles/global.css';

import { TaxRateTable } from 'calculator-core';
import { AppProps } from 'next/app';

console.log(TaxRateTable);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
