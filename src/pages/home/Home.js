import { useSelector } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';

const Home = () => {
  const results = useSelector(state => state.results.results.results);

  return (
    <div>
      <Pagination />

      <h1 className='text-center ubuntu my-4'>
        Rick & Morty <span className='text-primary'>Wiki</span>
      </h1>
      <Search />
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <Filters />
          </div>
          <div className='col-10'>
            {results ? <Cards results={results} /> : <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
