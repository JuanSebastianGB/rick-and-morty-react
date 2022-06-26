import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setResults } from '../actions/resultsActions';
import { helpHttp } from '../helpers/helpHttp';

const useData = (url = '') => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const data = await helpHttp().get(url);
      dispatch(setResults(data));
    })();
  }, [url]);
};

export default useData;
