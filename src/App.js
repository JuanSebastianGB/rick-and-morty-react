import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import useData from './hooks/useData';
import usePagination from './hooks/usePagination';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const { pageNumber } = usePagination();
  const search = useSelector(state => state.filter.search);
  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  useData(url);

  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/topics'>Topics</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
