import React, { useState, useEffect } from 'react';
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
import { getAll } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import clsx from 'clsx';
import Swipeable from '../../common/Swipeable/Swipeable';
import { useTranslation } from 'react-i18next';

const GallerySlider = () => {
  const { t } = useTranslation();

  const topSellers = useSelector(getAll);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSelectedProduct(topSellers[activeSlide]);
    }, 0);
  }, [activeSlide, topSellers]);

  if (!selectedProduct) {
    return null;
  }

  const onGalleryLeftSwipe = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
      setSelectedProduct(topSellers[activeSlide - 1]);
    }
  };

  const onGalleryRightSwipe = () => {
    if (activeSlide < topSellers.length - 1) {
      setActiveSlide(activeSlide + 1);
      setSelectedProduct(topSellers[activeSlide + 1]);
    }
  };

  let numSlidesToDisplay;

  if (window.innerWidth < 768) {
    numSlidesToDisplay = 2;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    numSlidesToDisplay = 4;
  } else {
    numSlidesToDisplay = 6;
  }

  return (
    <div className={styles.root}>
      <div className={'row no-gutters ' + styles.categories}>
        <div className={'col'}>
          <a href=''>{t('gallerySlider.featured')}</a>
        </div>
        <div className='col'>
          <a href='' className={styles.active}>
            {t('gallerySlider.top')}
          </a>
        </div>
        <div className='col'>
          <a href=''>{t('gallerySlider.sale')}</a>
        </div>
        <div className='col'>
          <a href=''>{t('gallerySlider.topRated')}</a>
        </div>
      </div>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}${selectedProduct.image})`,
          backgroundSize: 'cover',
        }}
      >
        <div className={clsx(styles.buttons, styles.tooltip)}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart} className={styles.icon}></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>{t('gallerySlider.favourite')}</span>
          <Button variant='outline'>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              className={styles.icon}
            ></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>{t('gallerySlider.compare')}</span>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye} className={styles.icon}></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>{t('gallerySlider.quickView')}</span>
          <Button variant='outline'>
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className={styles.icon}
            ></FontAwesomeIcon>
          </Button>
          <span className={styles.tooltiptext}>{t('gallerySlider.cart')}</span>
        </div>
        <div className={styles.badge}>
          <div className={styles.price}>
            {selectedProduct.oldPrice ? (
              <>
                <h6 className={styles.newPrice}>$ {selectedProduct.price}</h6>
                <h6 className={styles.oldPrice}>$ {selectedProduct.oldPrice}</h6>
              </>
            ) : (
              <h6 className={styles.centeredPrice}>$ {selectedProduct.price}</h6>
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
      <Swipeable onLeftSwipe={onGalleryLeftSwipe} onRightSwipe={onGalleryRightSwipe}>
        <div className={'row no-gutters ' + styles.sliderList}>
          <div className={'col-auto ' + styles.sliderArrow}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={onGalleryLeftSwipe}
            ></FontAwesomeIcon>
          </div>
          {topSellers
            .slice(activeSlide, activeSlide + numSlidesToDisplay)
            .map((item, index) => (
              <div
                className={'col ' + styles.product}
                key={index}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}${item.image})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            ))}
          <div className={'col-auto ' + styles.sliderArrow}>
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={onGalleryRightSwipe}
            ></FontAwesomeIcon>
          </div>
        </div>
      </Swipeable>
    </div>
  );
};

export default GallerySlider;
