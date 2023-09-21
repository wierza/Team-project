import React from 'react';
import { useSelector } from 'react-redux';
import { getProductByID } from '../../../redux/productsRedux';

import styles from './Sale.module.scss';
import { useTranslation } from 'react-i18next';

const Sale = () => {
  const { t } = useTranslation();

  const idOfPromotedProduct = 'aenean-ru-bristique-56';
  const promotedProduct = useSelector(state =>
    getProductByID(state, idOfPromotedProduct)
  );

  if (!promotedProduct) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={`container ${styles.mainContainer}`}>
        <div className={styles.leftSection}>
          <img src={promotedProduct.image} alt={promotedProduct.name} />
          <div className={styles.leftText}>
            <p>{promotedProduct.name}</p>
            <p className={styles.category}>{promotedProduct.category}</p>
            <div className={styles.discount}>-20%</div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rightUpPicture}>
            <img src={'/images/promo/officeChair1.jpg'} alt={'office chairs'} />
            <div className={styles.text}>
              <p className={styles.officeChair}>
                <b>{t('sale.product1')}</b> {t('sale.product2')}
              </p>
              <p className={styles.collection}>{t('sale.collection')}</p>
              <p className={styles.save}>$200.00 </p>
            </div>
          </div>
          <div className={styles.rightDownPicture}>
            <img src={'/images/promo/bedPromo(2).jpg'} alt={'bed'} />
            <div className={styles.rightBottomText}>
              <p className={styles.specialCollection}>
                <b>{t('sale.special')}</b> {t('sale.collection')}
              </p>
              <p className={styles.save}>{t('sale.text')} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
