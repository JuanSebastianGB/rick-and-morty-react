import styles from './Search.scss';
import { useDispatch } from 'react-redux';
import { setPage } from '../../actions/paginationActions';
import { setSearch } from '../../actions/filterActions';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={e => {
          dispatch(setPage(1));
          dispatch(setSearch(e.target.value));
        }}
        placeholder='Search for characters'
        className={styles.input}
        type='text'
      />
    </form>
  );
};

export default Search;
