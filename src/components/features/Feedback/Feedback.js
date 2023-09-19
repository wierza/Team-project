import React from 'react';
import { getAll } from '../../../redux/commentsRedux.js';
import { useSelector } from 'react-redux';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Coment from '../../common/Coment/Coment.js';
import { useTranslation } from 'react-i18next';

const Feedback = () => {
  const { t } = useTranslation();

  const comments = useSelector(getAll);
  const commentCount = comments.length;

  const dots = [];
  for (let i = 0; i < commentCount; i++) {
    dots.push(
      <li>
        <a
          onClick={() => this.handlePageChange(i)}
          className={i === 0 && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>{t('feedback.feedback')}</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-10'>
            <div className={styles.paragraph}>
              <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
            </div>
            <div>
              <Coment {...comments[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
