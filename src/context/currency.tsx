import React, { ReactNode, useState, useMemo } from 'react';

export const CurrencyContext = React.createContext<ICurrencyContext>({
  currency: 'USD',
  setCurrency: () => {}
});

interface CurrencyProviderProps {
  children: ReactNode
}

export const CurrencyProvider = (props: CurrencyProviderProps) => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const memoizedContext = useMemo<ICurrencyContext>(
    () => ({ currency, setCurrency }),
    [currency, setCurrency]
  );
  
  return (
    <CurrencyContext.Provider value={memoizedContext}>
      {props.children}
    </CurrencyContext.Provider>
  );
}


type Currency = 'USD' | 'PLN' | 'EUR' | 'GBP';

interface ICurrencyContext {
  currency: Currency
  setCurrency: (currency: Currency) => void
}