import { useEffect, useState } from 'react';

const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const params: Record<string, string> = {};
      
      searchParams.forEach((value, key) => {
        params[key] = value;
      });
      
      setQueryParams(params);
    }
  }, []);

  return queryParams;
};

export default useQueryParams;
