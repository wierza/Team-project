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
    /* on hover - fa icon && orange color */
    if (hoverStars) {
      if (hoverStars >= starIndex) return [faStar, styles.userColor];
      else return [farStar, styles.defaultColor];
    }
    /* default - far icon && black color */
    if (userStars === 0 && stars < starIndex) return [farStar, styles.defaultColor];
    /* default checked stars - fa icon && black color*/
    if (userStars === 0 && stars > 0) return [faStar, styles.defaultColor];
    /* checked by user - fa icon && orange color */
    if (userStars > 0) {
      if (starIndex <= userStars) return [faStar, styles.userColor];
      else return [farStar, styles.defaultColor];
    }
    return [farStar, styles.defaultColor];
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
          <FontAwesomeIcon
            icon={getClassNameAndIcon(i)[1]}
            onClick={() => handleClick(i, id)}
            onMouseOver={() => handleMouseOver(i)}
            onMouseLeave={() => handleOnMouseLeave()}
            className={getClassNameAndIcon(i)[2]}
          >
            {i} stars
          </FontAwesomeIcon>
        </a>
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
