import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import styles from './Sale.module.scss';

const Sale = () => {
  const products = useSelector(state => getAll(state));
  let randomProductIndex = Math.floor(Math.random() * products.length + 1);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div>Test</div>
        <img
          src={products[randomProductIndex].image}
          alt={products[randomProductIndex].name}
        />

        <div>
          <div>Test2</div>
          <div>Test 3</div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
