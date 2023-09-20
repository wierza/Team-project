import React from 'react';
import { useState } from 'react';
import styles from './Promoted.module.scss';
import { useSelector } from 'react-redux';
import { getAll, getProductByPromoted } from '../../../redux/productsRedux.js';
import ProductBox from '../../common/ProductBox/ProductBox';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable.js';
import { useTranslation } from 'react-i18next';

const Promoted = () => {
  const { t } = useTranslation();

  const products = useSelector(getAll);
  const productsPromo = useSelector(getProductByPromoted);

  const [activeProduct1, setActiveProduct1] = useState(9);
  const [activeProduct2, setActiveProduct2] = useState(0);
  const [fade, setFade] = useState(true);
  const [fade2, setFade2] = useState(true);

  const productsPromoQuantity = productsPromo.length;
  const product1 = products[activeProduct1];
  const product2 = productsPromo[activeProduct2];

  const product1LeftAction = e => {
    e.preventDefault();
    if (activeProduct1 > 0) {
      setFade2(false);
      setTimeout(() => {
        setActiveProduct1(activeProduct1 - 1);
        setFade2(true);
      }, 500);
    }
  };

  const product1RightAction = e => {
    e.preventDefault();
    if (activeProduct1 < products.length) {
      setFade2(false);
      setTimeout(() => {
        setActiveProduct1(activeProduct1 + 1);
        setFade2(true);
      }, 500);
    }
  };

  const handleCommentChange = i => {
    setFade(false);
    setTimeout(() => {
      setActiveProduct2(i);
      setFade(true);
    }, 500);
  };

  const dots = [];
  for (let i = 0; i < productsPromoQuantity; i++) {
    dots.push(
      <li key={i}>
        <p
          onClick={() => handleCommentChange(i)}
          className={i === activeProduct2 ? styles.active : ''}
        >
          comment {i}
        </p>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col-4 ${styles.productPromoBox}`}>
            <div className={styles.productPromo}>
              <div className={styles.topBar}>
                <span>{t('promoted.deals')}</span>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
              <div className={`${fade ? styles.fadeIn : styles.fadeOut}`}>
                <ProductBox
                  name={product2.name}
                  price={product2.price}
                  promo={product2.promo}
                  stars={product2.stars}
                  image={product2.image}
                  oldPrice={product2.oldPrice}
                  favorite={product2.favorite}
                  compare={product2.compare}
                  userStars={product2.userStars}
                  id={product2.id}
                  promoted={true}
                />
              </div>
            </div>
          </div>
          <div className={'col'}>
            <Swipeable
              onLeftSwipe={product1LeftAction}
              onRightSwipe={product1RightAction}
            >
              <div className={styles.photoSale}>
                <div
                  className={`${styles.image} + ${
                    fade2 ? styles.fadeIn : styles.fadeOut
                  }`}
                >
                  <img
                    className={styles.img}
                    src={product1.image}
                    alt={product1.name}
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
                    onClick={product1LeftAction}
                  >
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </Button>
                  <Button
                    variant='outline'
                    className={styles.button}
                    onClick={product1RightAction}
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </Swipeable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
