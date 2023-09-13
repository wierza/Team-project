import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './StarsRating.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarsRating = ({ stars, userStars }) => {
  const [isUserRating, setIsUserRating] = useState(true);
  const [userRating, setUserRating] = useState(0);
  const [hoverStars, setHoverStars] = useState(null);

  const handleClick = rateValue => {
    setUserRating(rateValue);
    setIsUserRating(true);
  };

  const handleMouseOver = index => {
    // setIsUserRating(true);
    setHoverStars(index);
  };
  const handleOnMouseLeave = () => {
    // setIsUserRating(false);
    setHoverStars(null);
  };

  const colors = {
    orange: 'red',
    empty: 'black',
  };

  function getColorAndIcon(starIndex) {
    /* hover - fa && orange */
    if (hoverStars) {
      if (hoverStars >= starIndex) return ['orange', faStar];
      else return ['black', farStar];
    }
    /* default - far && black */
    if (userStars === 0 && stars < starIndex) return ['black', farStar];
    /* globalChecked - fa && black */
    if (userStars === 0 && stars > 0) return ['black', faStar];
    /* myChecked - fa && orange */
    if (userStars > 0) {
      if (starIndex <= userStars) return ['orange', faStar];
      else return ['black', farStar];
    }
    return ['black', farStar];
  }

  return (
    <div>
      {isUserRating && (
        <div>
          {/* default - far && black */}
          {/* globalChecked - fa && black */}
          {/* myChecked - fa && orange */}
          {/* hover - fa && orange */}
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              <FontAwesomeIcon
                icon={getColorAndIcon(i)[1]}
                onClick={() => handleClick(i)}
                onMouseOver={() => handleMouseOver(i)}
                onMouseLeave={() => handleOnMouseLeave()}
                color={getColorAndIcon(i)[0]}
              >
                {i} stars
              </FontAwesomeIcon>
            </a>
          ))}
        </div>
      )}
      {!isUserRating && (
        <div>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon
                  icon={faStar}
                  onClick={() => handleClick(i)}
                  onMouseOver={() => handleMouseOver(i)}
                  onMouseLeave={() => handleOnMouseLeave()}
                  color={(hoverStars || userRating) >= i ? colors.orange : colors.empty}
                >
                  {i} stars
                </FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  icon={hoverStars >= i ? faStar : farStar}
                  onClick={() => handleClick(i)}
                  onMouseOver={() => handleMouseOver(i)}
                  onMouseLeave={() => handleOnMouseLeave()}
                  color={(hoverStars || userRating) >= i ? colors.orange : colors.empty}
                >
                  {i} stars
                </FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

StarsRating.propTypes = {
  stars: PropTypes.number,
  userStars: PropTypes.number,
};

export default StarsRating;
