import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import styles from './Promoted.module.scss';
import { useSelector } from 'react-redux';
import { getAll, getProductByPromoted } from '../../../redux/productsRedux.js';
import ProductBox from '../../common/ProductBox/ProductBox';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';
import { useTranslation } from 'react-i18next';

const Promoted = () => {
  const { t } = useTranslation();

  const products = useSelector(getAll);
  const productsPromo = useSelector(getProductByPromoted);
  const productsQuantity = products.length;
  const productsPromoQuantity = productsPromo.length;

  // Set the default value of the active product to the first product
  const [activeproductLeftBox, setActiveproductLeftBox] = useState(0);
  const [activeproductRightBox, setActiveproductRightBox] = useState(0);

  const [fadeLeftBox, setFadeLeftBox] = useState(true);
  const [fadeRightBox, setFadeRightBox] = useState(true);

  const productRightBox = products[activeproductRightBox];
  const productLeftBox = productsPromo[activeproductLeftBox];

  const [intervalId, setIntervalId] = useState();
  let [animationCounter, setAnimationCounter] = useState({
    num: 0,
  });

  const productRightBoxLeftAction = e => {
    e.preventDefault();
    if (activeproductRightBox > 0) {
      setFadeRightBox(false);
      setTimeout(() => {
        setActiveproductRightBox(activeproductRightBox - 1);
        setFadeRightBox(true);
      }, 500);
    }
  };

  const productRightBoxRightAction = e => {
    e.preventDefault();
    if (activeproductRightBox < products.length) {
      setFadeRightBox(false);
      setTimeout(() => {
        setActiveproductRightBox(activeproductRightBox + 1);
        setFadeRightBox(true);
      }, 500);
    }
  };

  const handleProductChange = i => {
    clearInterval(intervalId);
    productChange(i);
    setTimeout(() => {
      startAnimation();
    }, 9500);
  };

  const productChange = i => {
    setFadeLeftBox(false);
    setTimeout(() => {
      setActiveproductLeftBox(i);
      setFadeLeftBox(true);
    }, 500);
  };

  const changeSlide = () => {
    setAnimationCounter(prevState => {
      return {
        num: prevState.num + 1,
      };
    });
  };

  const startAnimation = useCallback(() => {
    const id = setInterval(changeSlide, 3000);
    setIntervalId(id);
  }, []);

  useEffect(() => {
    startAnimation();
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAnimation]);

  useEffect(() => {
    productChange(animationCounter.num);
  }, [animationCounter]);

  if (animationCounter.num === productsPromoQuantity) {
    setAnimationCounter(() => {
      return {
        num: 0,
      };
    });
  }

  const dots = [];
  for (let i = 0; i < productsPromoQuantity; i++) {
    dots.push(
      <li key={productsPromo[i].id}>
        <button
          onClick={() => handleProductChange(i)}
          className={i === activeproductLeftBox ? styles.active : ''}
        >
          product {i}
        </button>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          {productsPromoQuantity ? (
            <div className={`col-4 ${styles.productPromoBox}`}>
              <div className={styles.productPromo}>
                <div className={styles.topBar}>
                  <span>{t('promoted.deals')}</span>
                  <div className={'col-auto ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </div>
                <div className={`${fadeLeftBox ? styles.fadeIn : styles.fadeOut}`}>
                  <ProductBox
                    name={productLeftBox.name}
                    price={productLeftBox.price}
                    promo={productLeftBox.promo}
                    stars={productLeftBox.stars}
                    image={productLeftBox.image}
                    oldPrice={productLeftBox.oldPrice}
                    favorite={productLeftBox.favorite}
                    compare={productLeftBox.compare}
                    userStars={productLeftBox.userStars}
                    id={productLeftBox.id}
                    promoted={true}
                  />
                </div>
              </div>
            </div>
          ) : null}
          {productsQuantity ? (
            <div className={'col'}>
              <Swipeable
                onLeftSwipe={productRightBoxLeftAction}
                onRightSwipe={productRightBoxRightAction}
              >
                <div className={styles.photoSale}>
                  <div
                    className={`${styles.image} + ${
                      fadeRightBox ? styles.fadeIn : styles.fadeOut
                    }`}
                  >
                    <img
                      className={styles.img}
                      src={productRightBox.image}
                      alt={productRightBox.name}
                    />
                    <div className={styles.furniture}>
                      <h2>
                        {t('promoted.indoor')}
                        <span>{t('promoted.furniture')}</span>
                      </h2>
                      <p>{t('promoted.text')}</p>
                      <Button variant='outline' className={styles.shopNowButton}>
                        {t('promoted.shop')}
                      </Button>
                    </div>
                  </div>
                  <div className={styles.buttons}>
                    <Button
                      variant='outline'
                      className={styles.button}
                      onClick={productRightBoxLeftAction}
                    >
                      <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    </Button>
                    <Button
                      variant='outline'
                      className={styles.button}
                      onClick={productRightBoxRightAction}
                    >
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Button>
                  </div>
                </div>
              </Swipeable>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Promoted;
