import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import useData from './hooks/useData';
import usePagination from './hooks/usePagination';

function App() {
  const { pageNumber } = usePagination();
  const url = `https://rickandmortyapi.com/api/characters/?page=${pageNumber}`;
  const { results } = useData(url);
  return (
    <div className='App'>
      <h1 className='text-center ubuntu my-4'>
        Rick & Morty <span className='text-primary'>Wiki</span>
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filters />
          </div>
          <div className='col-8'>
            <Cards results={results} columnsQuantity={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
