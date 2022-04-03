import { useEffect, useState } from 'react';
import { LoadingStatus } from '@/constants';
import http from '@/http';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(LoadingStatus.idle);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(LoadingStatus.pending);
      setData(null);
      setError(null);
      try {
        const response = await http.get(url);
        setData(response.data);
        setLoading(LoadingStatus.fulfilled);
      } catch (err) {
        setError(err);
        setLoading(LoadingStatus.rejected);
      }
    };
    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useFetch;
