import React from 'react';
import { useSelector } from 'react-redux';
import { getProductByID } from '../../../redux/productsRedux';

import styles from './Sale.module.scss';

const Sale = () => {
  const sofa = useSelector(state => getProductByID(state, 'aenean-ru-bristique-56'));

  return (
    <div className={styles.root}>
      <div className={`container ${styles.mainContainer}`}>
        <div className={styles.leftSection}>
          <img src={sofa[0].image} alt={sofa[0].name} />
          <div className={styles.leftText}>
            <p>{sofa[0].name}</p>
            <p className={styles.category}>{sofa[0].category}</p>
            <div className={styles.discount}>-20%</div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rightUpPicture}>
            <img src={'/images/promo/officeChair1.jpg'} alt={'office chairs'} />
            <div className={styles.text}>
              <p className={styles.officeChair}>
                <b>Office</b> Chair
              </p>
              <p className={styles.collection}>Collection</p>
              <p className={styles.save}>$200.00 </p>
            </div>
          </div>
          <div className={styles.rightDownPicture}>
            <img src={'/images/promo/bedPromo(2).jpg'} alt={'bed'} />
            <div className={styles.rightBottomText}>
              <p className={styles.specialCollection}>
                <b>Special</b> Collection
              </p>
              <p className={styles.save}>Save up 45% of furniture </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
