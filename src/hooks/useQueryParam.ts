import { useEffect, useState } from 'react';

const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const params: Record<string, string> = {};
      
      searchParams.forEach((value, key) => {
        params[key] = value;
      });

      const paramString = new URLSearchParams(params).toString();
      
      setQueryParams(paramString);
    }
  }, []);

  return queryParams;
};

export default useQueryParams;
