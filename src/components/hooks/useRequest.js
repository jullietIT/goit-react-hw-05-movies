import { useState, useEffect } from 'react';

export const useRequest = (httpRequestFunction, param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchInfo = async () => {
      if (param === '') {
        return;
      }
      setIsLoading(true);
      try {
        setData(await httpRequestFunction(param, controller.signal));
      } catch (e) {
        if (e.code === 'ERR_CANCELED') return;
        setError('Sorry, something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInfo();

    return () => {
      controller.abort();
    };
  }, [httpRequestFunction, param]);

  return [data, error, isLoading];
};
