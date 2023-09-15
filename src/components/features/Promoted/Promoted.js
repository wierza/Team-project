import React from 'react';
import styles from './Promoted.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';
import ProductBoxPromo from '../../common/ProductBoxPromo/ProductBoxPromo';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Promoted = () => {
  const products = useSelector(getAll);

  const product1 = products[5];
  const product2 = products[0];

  const warunekDlaActivwKropkach = 1 === 0;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.productPromo}>
              <div className={styles.topBar}>
                <span>HOT DEALS</span>
                <div className={styles.dots}>
                  <ul>
                    <li>
                      <a className={1 === 1 && styles.active} href='#'></a>
                    </li>
                    <li>
                      <a
                        className={warunekDlaActivwKropkach && styles.active}
                        href='#'
                      ></a>
                    </li>
                    <li>
                      <a
                        className={warunekDlaActivwKropkach && styles.active}
                        href='#'
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <ProductBoxPromo {...product2} />
            </div>
          </div>
          <div className='col-8'>
            <div className={styles.photoSale}>
              <div className={styles.image}>
                <img className={styles.img} src={product1.image} alt={product1.name} />
                <div className={styles.furniture}>
                  <h2>
                    INDOOR<span>FURNITURE</span>
                  </h2>
                  <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                  <Button variant='outline' className={styles.shopNowButton}>
                    SHOP NOW
                  </Button>
                </div>
              </div>
              <div className={styles.buttons}>
                <Button variant='outline' className={styles.button}>
                  <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                </Button>
                <Button variant='outline' className={styles.button}>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
