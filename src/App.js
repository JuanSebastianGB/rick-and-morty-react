import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const { results } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
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
