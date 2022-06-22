import { useEffect, useState } from 'react';

const useData = (url = '') => {
  const [fetchedData, updateFetchedData] = useState([]);
  const { results } = fetchedData;

  useEffect(() => {
    (async function () {
      const data = await fetch(url).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [url]);

  return { results };
};

export default useData;
