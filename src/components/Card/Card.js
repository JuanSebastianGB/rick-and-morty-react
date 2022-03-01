/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Card.module.scss';

function Card({ result, columns }) {
  const { image, name, status, location } = result;
  return (
    <div
      className={`col-${columns} position-relative ${styles.card}`}
      key={result.id}
    >
      <img src={image} alt="" className={`img-fluid ${styles.img}`} />
      <div style={{ padding: '10px' }} className="content">
        <div className="fs-4 fw-bold mb-4">{name}</div>
        <div className="">
          <div className="fs-6">Last location</div>
          <div className="fs-5">{location.name}</div>
        </div>
      </div>
      {(() => {
        if (status === 'Dead') {
          <div className={`${styles.badge} badge bg-danger position-absolute`}>
            {status}
          </div>;
        } else if (status === 'Alive') {
          <div className={`${styles.badge} badge bg-success position-absolute`}>
            {status}
          </div>;
        } else {
          <div
            className={`${styles.badge} badge bg-secondary position-absolute`}
          >
            {status}
          </div>;
        }
      })()}

      <div className={`${styles.badge} badge bg-danger position-absolute`}>
        {status}
      </div>
    </div>
  );
}

export default Card;
