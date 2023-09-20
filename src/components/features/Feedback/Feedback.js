import React from 'react';
import { getAll } from '../../../redux/commentsRedux.js';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Coment from '../../common/Coment/Coment.js';
import Swipeable from '../../common/Swipeable/Swipeable.js';
import Button from '../../common/Button/Button';
import { useTranslation } from 'react-i18next';

const Feedback = () => {
  const { t } = useTranslation();

  const comments = useSelector(getAll);
  const commentCount = comments.length;
  const [activeComment, setActiveComment] = useState(1);
  const [fade, setFade] = useState(true);

  const comentLeftAction = e => {
    e.preventDefault();
    if (activeComment > 0) {
      setFade(false);
      setTimeout(() => {
        setActiveComment(activeComment - 1);
        setFade(true);
      }, 500);
    }
  };

  const comentRightAction = e => {
    e.preventDefault();
    if (activeComment < commentCount - 1) {
      setFade(false);
      setTimeout(() => {
        setActiveComment(activeComment + 1);
        setFade(true);
      }, 500);
    }
  };
  const handleCommentChange = i => {
    setFade(false);
    setTimeout(() => {
      setActiveComment(i);
      setFade(true);
    }, 500);
  };

  const dots = [];
  for (let i = 0; i < commentCount; i++) {
    dots.push(
      <li key={i}>
        <p
          onClick={() => handleCommentChange(i)}
          className={i === activeComment && styles.active}
        >
          comment {i}
        </p>
      </li>
    );
  }

  return (
    <Swipeable onLeftSwipe={comentLeftAction} onRightSwipe={comentRightAction}>
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
          <div className={styles.swipeButton}>
            <Button
              variant='outline'
              onClick={comentLeftAction}
              className={styles.leftButton}
            >
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
            <Button
              variant='outline'
              onClick={comentRightAction}
              className={styles.rightButton}
            >
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
          <div className='row justify-content-center'>
            <div className='col-10'>
              <div className={styles.paragraph}>
                <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
              </div>
              <div className={`row + ${fade ? styles.fadeIn : styles.fadeOut}`}>
                <Coment {...comments[activeComment]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

export default Feedback;
