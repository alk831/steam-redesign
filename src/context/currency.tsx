import React, { ReactNode, useState, useMemo } from 'react';

export const CurrencyContext = React.createContext<ICurrencyContext | null>(null);

interface CurrencyProviderProps {
  children: ReactNode
}

export const CurrencyProvider = (props: CurrencyProviderProps) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const memoizedContext = useMemo<ICurrencyContext>(
    () => {
      const intl = new Intl.NumberFormat(
        'en-EN',
        { currency }
      );

      return { currency, setCurrency, intl };
    },
    [currency, setCurrency]
  );

  return (
    <CurrencyContext.Provider value={memoizedContext}>
      {props.children}
    </CurrencyContext.Provider>
  );
}


type Currency = 'USD' | 'PLN' | 'EUR' | 'GBP';

export interface ICurrencyContext {
  currency: Currency
  setCurrency: (currency: Currency) => void
  intl: Intl.NumberFormat
}