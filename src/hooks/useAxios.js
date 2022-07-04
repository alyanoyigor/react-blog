import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

export const useAxios = (fetchFunc) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const newData = await fetchFunc();
      setData(newData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [fetchFunc]);

  useEffect(() => {
    toast.promise(getData, {
      pending: 'Searching data for you',
      success: 'Data has been loaded successfully',
      error: 'Failed to load data',
    });
  }, [getData]);

  return { data, error, loading };
};
