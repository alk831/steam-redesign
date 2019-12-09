import { useContext } from 'react';
import { CurrencyContext, ICurrencyContext } from '../context/currency';

export const useCurrency = (): ICurrencyContext => {
  const currencyContext = useContext(CurrencyContext);

  if (currencyContext === null) {
    throw new Error(
      'Currency provider has not been passed.'
    );
  }

  return currencyContext;
}