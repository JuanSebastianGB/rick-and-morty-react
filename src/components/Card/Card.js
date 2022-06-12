import styles from './Card.module.scss';
import PropTypes from 'prop-types';

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
      {status === 'Dead' ? (
        <div className={`${styles.badge} badge bg-danger position-absolute`}>
          {status}
        </div>
      ) : (
        ''
      )}
      {status === 'Alive' ? (
        <div className={`${styles.badge} badge bg-success position-absolute`}>
          {status}
        </div>
      ) : (
        ''
      )}
      {status !== 'Alive' && status !== 'Dead' ? (
        <div className={`${styles.badge} badge bg-secundary position-absolute`}>
          {status}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

Card.propTypes = {
  result: PropTypes.object,
  columns: PropTypes.number,
};
export default Card;
