import React from 'react';
import styles from './GallerySlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faShoppingBasket,
  faExchangeAlt,
  faEye,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import { getAll, getProductByImage } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import clsx from 'clsx';

const GallerySlider = () => {
  const topSellers = useSelector(getAll);
  const imageToFind = './images/furniture/chair/5.jpg';

  const selectedProduct = useSelector(state => getProductByImage(state, imageToFind));

  if (!selectedProduct) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={'row no-gutters ' + styles.categories}>
        <div className={'col'}>
          <a href=''>FEATURED</a>
        </div>
        <div className='col'>
          <a href='' className={styles.active}>
            TOP SELLER
          </a>
        </div>
        <div className='col'>
          <a href=''>SALE OFF</a>
        </div>
        <div className='col'>
          <a href=''>TOP RATED</a>
        </div>
      </div>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}images/furniture/chair/5.jpg)`,
          backgroundSize: 'cover',
        }}
      >
        <div className={clsx(styles.buttons, styles.tooltip)}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart} className={styles.icon}></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>Add To Favorite</span>
          <Button variant='outline'>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              className={styles.icon}
            ></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>Add To Compare</span>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye} className={styles.icon}></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>Quick View</span>
          <Button variant='outline'>
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className={styles.icon}
            ></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>Add To Cart</span>
        </div>
        <div className={styles.badge}>
          <div className={styles.price}>
            <h6 className={styles.newPrice}>$ {selectedProduct.price}</h6>
            {selectedProduct.oldPrice && (
              <h6 className={styles.oldPrice}>$ {selectedProduct.oldPrice}</h6>
            )}
          </div>
          <div className={styles.nameBadge}>
            <h4>{selectedProduct.name}</h4>
            <div>
              {[1, 2, 3, 4, 5].map(i => (
                <span key={i} href='#'>
                  {i <= selectedProduct.stars ? (
                    <FontAwesomeIcon className={styles.stars} icon={faStar} />
                  ) : (
                    <FontAwesomeIcon className={styles.stars} icon={farStar} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={'row no-gutters ' + styles.sliderList}>
        <div className={'col-auto ' + styles.sliderArrow}>
          {' '}
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </div>
        {topSellers.slice(0, 6).map(item => (
          <div
            className={'col ' + styles.product}
            key={item.id}
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL
              }/images/furniture/chair/${item.id.substr(item.id.length - 1)}.jpg)`,
              backgroundSize: 'cover',
            }}
          ></div>
        ))}
        <div className={'col-auto ' + styles.sliderArrow}>
          {' '}
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
