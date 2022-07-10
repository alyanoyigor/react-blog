import { useState, useEffect } from 'react';

export const useAxios = (fetchFunc) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
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
