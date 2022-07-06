import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const useAxios = (fetchFunc, withToast) => {
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
    withToast
      ? toast.promise(getData, {
          pending: 'Searching data for you',
          success: 'Data has been loaded successfully',
          error: 'Failed to load data',
        })
      : getData();
  }, []);

  return { data, error, loading };
};
