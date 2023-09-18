import React from 'react';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserStars } from '../../../redux/productsRedux';

import styles from './StarsRating.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarsRating = ({ stars, userStars, id }) => {
  const dispatch = useDispatch();
  const [hoverStars, setHoverStars] = useState(null);

  const handleClick = (value, id) => {
    dispatch(setUserStars({ value, id }));
  };

  const handleMouseOver = index => {
    setHoverStars(index);
  };
  const handleOnMouseLeave = () => {
    setHoverStars(null);
  };

  function getClassNameAndIcon(starIndex) {
    /* on hover - full star && orange color */
    if (hoverStars) {
      if (hoverStars >= starIndex) return [faStar, styles.userColor];
      else return [farStar, styles.defaultColor];
    }
    /* default - empty star && black color */
    if (userStars === 0 && stars < starIndex) return [farStar, styles.defaultColor];
    /* default checked stars - full star && black color*/
    if (userStars === 0 && stars > 0) return [faStar, styles.defaultColor];
    /* checked by user - full star && orange color */
    if (userStars > 0) {
      if (starIndex <= userStars) return [faStar, styles.userColor];
      else return [farStar, styles.defaultColor];
    }
    return [farStar, styles.defaultColor];
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i}>
          <FontAwesomeIcon
            icon={getClassNameAndIcon(i)[0]}
            onClick={() => handleClick(i, id)}
            onMouseOver={() => handleMouseOver(i)}
            onMouseLeave={() => handleOnMouseLeave()}
            className={getClassNameAndIcon(i)[1]}
          >
            {i} stars
          </FontAwesomeIcon>
        </span>
      ))}
    </div>
  );
};

StarsRating.propTypes = {
  stars: PropTypes.number,
  userStars: PropTypes.number,
  id: PropTypes.string,
};

export default StarsRating;
