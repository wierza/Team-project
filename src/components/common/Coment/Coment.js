import React from 'react';
import PropTypes from 'prop-types';

import styles from './Coment.module.scss';

const Coment = ({ ...props }) => {
  return (
    <div className={styles.main}>
      <p className={styles.content}>{props.comment}</p>
      <div className={styles.author}>
        <div className={styles.photo}>
          <img className={styles.img} src={props.image} alt={props.name} />
        </div>
        <div className={styles.info}>
          <p>{props.name}</p>
          <span>{props.category}</span>
        </div>
      </div>
    </div>
  );
};

Coment.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  comment: PropTypes.string,
};

export default Coment;
