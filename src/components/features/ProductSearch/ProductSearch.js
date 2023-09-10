import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <button className={styles.categoryButton}>Select a category</button>
      <ul className={styles.categoryList}>
        <li>
          <Link to={'#'} className={styles.listElement}>
            Bed
          </Link>
        </li>
        <li>
          <Link to={'#'} className={styles.listElement}>
            Chair
          </Link>
        </li>
        <li>
          <Link to={'#'} className={styles.listElement}>
            Sofa
          </Link>
        </li>
        <li>
          <Link to={'#'} className={styles.listElement}>
            Table
          </Link>
        </li>
        <li>
          <Link to={'#'} className={styles.listElement}>
            Dining
          </Link>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
