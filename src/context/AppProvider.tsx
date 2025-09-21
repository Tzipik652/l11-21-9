import React, { useState, FC } from 'react';
import { AppContext, AppContextType } from './AppContext';

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [val, setVal] = useState<string>("hello");
  const [number, SetNumber] = useState<number>(0);
  const [coins, SetCoins] = useState<number>(0);
  const [counter, SetCounter] = useState<number>(0);

  const contextValue: AppContextType = {
    val,
    number,
    SetNumber,
    coins,
    SetCoins,
    counter,
    SetCounter,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
