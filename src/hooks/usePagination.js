import { useState } from 'react';

const usePagination = () => {
  const [pageNumber, setPage] = useState(1);
  return { pageNumber, setPage };
};

export default usePagination;
