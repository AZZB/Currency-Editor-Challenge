import cp from "coinpaprika-js";
import { useEffect, useState } from "react";

export const useCoins = () => {
  const [isFetching, setFetching] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const coins = await cp.coins();
        setFetching(false);
        setCoins(coins);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return { coins, isFetching, error };
};
