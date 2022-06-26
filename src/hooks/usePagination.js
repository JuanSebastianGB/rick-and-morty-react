import { useSelector } from 'react-redux';

const usePagination = () => {
  const pageNumber = useSelector(state => state.page);
  return { pageNumber };
};

export default usePagination;
