import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { coinGeckoApi } from '../services/api';

interface CoinProviderProps {
  children: ReactNode;
}

export interface CoinContextData {
  topCoins: any[] | null;
  favoritesCoins: any[] | null;
  searchCoins: any[];
  currentCoin: any;
  updateFavorite: (coinId: string) => void;
  removeFavorite: (coinId: string) => void;
  searchCoin: (coin: string) => any;
  getCoinById: (coin: string) => any;
}

export const CoinContext = createContext({} as CoinContextData);

const CoinProvider: React.FC<CoinProviderProps> = ({
  children,
}: CoinProviderProps) => {
  const [favoritesCoins, setFavoritesCoins] = useState<any>(null);
  const [favoritesLoading, setFavoritesLoading] = useState(true);
  const [topCoins, setTopCoins] = useState<any[] | null>(null);
  const [searchCoins, setSearchCoins] = useState<any[]>([]);
  const [currentCoin, setCurrentCoin] = useState(null);
  const favoritesStorageKey = '@infoMoney:favorites';

  const getCoins = useCallback(async () => {
    try {
      const response = await coinGeckoApi.get(
        '/coins/markets/?vs_currency=usd',
      );
      setTopCoins(response.data);
    } catch (err) {
      throw new Error(String(err));
    }
  }, []);

  const getCoinById = useCallback(async (id: string) => {
    try {
      const response = await coinGeckoApi.get(`/coins/${id}`);
      setCurrentCoin(response.data);
    } catch (err) {
      throw new Error(String(err));
    }
  }, []);

  const searchCoin = useCallback(async (coin: string) => {
    try {
      setSearchCoins([]);
      const response = await coinGeckoApi.get(`/search/?query=${coin}`);
      setSearchCoins(response.data.coins);
    } catch (err) {
      throw new Error(String(err));
    }
  }, []);

  useEffect(() => {
    getCoins();
  }, [getCoins]);

  const loadFavorites = useCallback(() => {
    const favorites = localStorage.getItem(favoritesStorageKey);
    if (favorites) {
      setFavoritesCoins(JSON.parse(favorites));
    }
    setFavoritesLoading(false);
  }, []);

  const updateFavorite = useCallback(
    async (coin: any) => {
      try {
        localStorage.setItem(
          favoritesStorageKey,
          JSON.stringify([...(favoritesCoins || []), coin]),
        );
      } finally {
        loadFavorites();
      }
    },
    [favoritesCoins, loadFavorites],
  );

  const removeFavorite = useCallback(
    async (coin: any) => {
      try {
        localStorage.setItem(
          favoritesStorageKey,
          JSON.stringify([
            ...(favoritesCoins.filter((ele: any) => ele.id !== coin.id) || []),
          ]),
        );
      } finally {
        loadFavorites();
      }
    },
    [favoritesCoins, loadFavorites],
  );

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const CoinProviderData = useMemo(
    () => ({
      topCoins,
      favoritesCoins,
      updateFavorite,
      removeFavorite,
      searchCoin,
      getCoinById,
      searchCoins,
      currentCoin,
    }),

    [
      topCoins,
      favoritesCoins,
      updateFavorite,
      removeFavorite,
      searchCoin,
      getCoinById,
      searchCoins,
      currentCoin,
    ],
  );

  return (
    <CoinContext.Provider value={CoinProviderData}>
      {children}
    </CoinContext.Provider>
  );
};

function useCoin(): CoinContextData {
  const context = useContext(CoinContext);

  if (!context) {
    throw new Error('useCoin must be used within an CoinProvider');
  }

  return context;
}

export { CoinProvider, useCoin };
