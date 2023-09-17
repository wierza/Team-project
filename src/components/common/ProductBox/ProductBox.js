import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  image,
  oldPrice,
  favorite,
  compare,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.buttoncontainer}>
        <Button variant='small' className={styles.buttons}>
          Quick View
        </Button>
        <Button variant='small' className={styles.buttons}>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button className={favorite ? styles.favoriteActive : ''} variant='outline'>
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

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
  favorite: PropTypes.bool.isRequired,
  compare: PropTypes.bool.isRequired,
};

export default ProductBox;
