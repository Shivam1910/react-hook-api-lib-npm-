import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, method = 'GET', body = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios({
                    url,
                    method,
                    data: body,
                });
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body]);

    return { data, loading, error };
};

export default useApi;
