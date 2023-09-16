import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minDistanceSwipe = 50;

  const onTouchStart = e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = e => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => rightAction(),
    onSwipedRight: () => leftAction(),
    swipeDuration: 500,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minDistanceSwipe;
    const isRightSwipe = distance < -minDistanceSwipe;
    if (isLeftSwipe) {
      rightAction();
    }
    if (isRightSwipe) {
      leftAction();
    }
  };

  const handleKeyPress = useCallback(
    e => {
      if (e.key === 'ArrowLeft') {
        leftAction();
      } else if (e.key === 'ArrowRight') {
        rightAction();
      }
    },
    [leftAction, rightAction]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={styles.swipeable}>
      <Button variant='outline' onClick={leftAction} className={styles.swipeButton}>
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </Button>

      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        {...handlers}
      >
        {children}
      </div>

      <Button variant='outline' onClick={rightAction} className={styles.swipeButton}>
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </Button>
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
