import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

const Swipeable = ({ children, onLeftSwipe, onRightSwipe }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minDistanceSwipe = 50;

  const onTouchStart = e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = e => {
    e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => onLeftSwipe(),
    onSwipedRight: () => onRightSwipe(),
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
      onLeftSwipe();
    }
    if (isRightSwipe) {
      onRightSwipe();
    }
  };

  const handleKeyPress = useCallback(
    e => {
      if (e.key === 'ArrowLeft') {
        onLeftSwipe();
      } else if (e.key === 'ArrowRight') {
        onRightSwipe();
      }
    },
    [onLeftSwipe, onRightSwipe]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      {...handlers}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  onLeftSwipe: PropTypes.func,
  onRightSwipe: PropTypes.func,
};

export default Swipeable;
