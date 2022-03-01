/* eslint-disable react/prop-types */
import React from 'react';

function Card({ result, columns }) {
  const { image, name, status, location } = result;
  return (
    <div className={`col-${columns} position-relative`} key={result.id}>
      <img src={image} alt="" className="img-fluid" />
      <div className="content">
        <div className="fs-4 fw-bold mb-4">{name}</div>
        <div className="">
          <div className="fs-6">Last location</div>
          <div className="fs-5">{location.name}</div>
        </div>
      </div>
      <div className="badge bg-danger">{status}</div>
    </div>
  );
}

export default Card;
