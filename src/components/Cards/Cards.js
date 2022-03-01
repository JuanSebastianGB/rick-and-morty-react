/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';

function Cards({ results, columnsQuantity }) {
  let display;
  if (results) {
    display = results.map((result) => (
      <Card result={result} columns={columnsQuantity} />
    ));
  } else {
    display = 'Not found';
  }

  return <div className="row">{display}</div>;
}

export default Cards;
