import Card from '../Card/Card';
import PropTypes from 'prop-types';

function Cards({ results }) {
  let display;
  if (results) {
    display = results.map((result, key) => <Card key={key} result={result} />);
  } else {
    display = 'Not found';
  }

  return <div className='row'>{display}</div>;
}

Cards.propTypes = {
  results: PropTypes.array,
  columnsQuantity: PropTypes.number,
};

export default Cards;
