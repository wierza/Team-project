import React from 'react';
import PropTypes from 'prop-types';

import styles from './Coment.module.scss';
import { useTranslation } from 'react-i18next';

const Coment = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <p className={styles.content}>{props.comment}</p>
      <div className={styles.author}>
        <div className={styles.photo}>
          <img className={styles.img} src={props.image} alt={props.name} />
        </div>
        <div className={styles.info}>
          <p>{props.name}</p>
          <span>{t('feedback.client')}</span>
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
