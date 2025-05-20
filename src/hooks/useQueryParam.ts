import { useState, useEffect } from 'react';

const useQueryParams = () => {
    const [params, setParams] = useState('');

    useEffect(() => {
        const currentParams = window.location.search;
        setParams(currentParams);
    }, []);

    return params;
};

export default useQueryParams;
