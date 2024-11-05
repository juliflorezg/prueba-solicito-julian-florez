import { useState, useEffect } from 'react';

const useGetData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(endpoint)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const response = await fetch(`/api/nest/v1/${endpoint}`);
        console.log({ response })
        if (!response.ok) {
          const errData = await response.json();
          if (errData.message) {
            throw new Error(`HTTP error, status: ${response.status}, cause: ${errData.message}`, {
              cause: errData.message
            });

          }
          throw new Error(`HTTP error, status: ${response.status}`);
        }
        const data = await response.json();

        setData(data);
        setLoading(false)
        return data;
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [endpoint]);

  return [data, loading, error];
};

export default useGetData;



