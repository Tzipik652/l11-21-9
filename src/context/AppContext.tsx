import { createContext } from 'react';

export interface AppContextType {
    val: string;
    number: number;
    SetNumber: React.Dispatch<React.SetStateAction<number>>;
    coins: number;
    SetCoins: React.Dispatch<React.SetStateAction<number>>;
    counter: number;
    SetCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextType>({
    val: '',
    number: 0,
    SetNumber: () => {},
    coins: 0,
    SetCoins: () => {},
    counter: 0,
    SetCounter: () => {},
})