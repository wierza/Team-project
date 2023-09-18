import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarsRating from '../../features/StarsRating/StarsRating';

import { useDispatch } from 'react-redux';
import { toggleFavourite } from '../../../redux/productsRedux';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  oldPrice,
  favorite,
  compare,
  userStars,
  id,
}) => {
  const dispatch = useDispatch();

  const handleAddToFavButton = e => {
    e.preventDefault();
    dispatch(toggleFavourite(id));
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <StarsRating stars={stars} userStars={userStars} id={id}></StarsRating>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            className={favorite ? styles.favoriteActive : ''}
            onClick={handleAddToFavButton}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button className={compare ? styles.compareActive : ''} variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        {oldPrice && (
          <div>
            <span className={styles.oldPrice}>$ {oldPrice}</span>
          </div>
        )}
        <div className={styles.price}>
          <Button className={styles.btnprice} noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  userStars: PropTypes.number,
  id: PropTypes.string,
  oldPrice: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
};

export default ProductBox;
