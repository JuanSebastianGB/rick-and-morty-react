import { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

const useData = (url = '') => {
  const [fetchedData, updateFetchedData] = useState([]);
  const { results } = fetchedData;

  helpHttp();
  useEffect(() => {
    (async function () {
      const data = await helpHttp().get(url);
      console.log(data);
      updateFetchedData(data);
    })();
  }, [url]);

  return { results };
};

export default useData;
