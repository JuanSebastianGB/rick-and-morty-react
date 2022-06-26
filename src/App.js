import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import useData from './hooks/useData';
import usePagination from './hooks/usePagination';
import { useSelector } from 'react-redux';

function App() {
  const { pageNumber } = usePagination();
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  useData(url);
  const results = useSelector(state => state.results.results.results);
  return (
    <div className='App'>
      <h1 className='text-center ubuntu my-4'>
        Rick & Morty <span className='text-primary'>Wiki</span>
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <Filters />
          </div>
          <div className='col-10'>
            {results ? <Cards results={results} /> : <div>Loading...</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
