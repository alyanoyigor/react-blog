import { useState, useEffect } from 'react';

export const useAxios = (fetchFunc: () => Promise<void>) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const newData = await fetchFunc();
      setData(newData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading };
};
