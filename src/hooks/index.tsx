import { ReactNode } from 'react';
import { CoinProvider } from './useCoin';

interface IProps {
  children: ReactNode;
}

const AppProvider = ({ children }: IProps) => {
  return <CoinProvider>{children}</CoinProvider>;
};

export default AppProvider;
