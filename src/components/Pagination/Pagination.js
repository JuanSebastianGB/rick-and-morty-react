import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../actions/paginationActions';
import './pagination.scss';
import useWidthResize from '../../hooks/useWidthResize';

// Example items, to simulate fetching from another resources.

function Pagination() {
  const dispatch = useDispatch();
  const { page: pageNumber, results } = useSelector(state => state);
  let pages = 1;
  try {
    pages = results.results.info.pages;
  } catch (err) {}

  const { width } = useWidthResize();

  const handlePageClick = ({ selected }) => {
    console.log(`You clicked page ${selected + 1}`);
    dispatch(setPage(selected + 1));
  };
  return (
    <>
      <ReactPaginate
        className='pagination justify-content-center my-4 gap-4'
        nextLabel='Next'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel='Prev'
        previousClassName='btn btn-primary fs-5 prev'
        nextClassName='btn btn-primary fs-5 next'
        activeClassName='active'
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={pages}
        onPageChange={handlePageClick}
        pageClassName='page-item'
        pageLinkClassName='page-link'
      />
    </>
  );
}

export default Pagination;
