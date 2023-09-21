import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import styles from './ProductSearch.module.scss';

import { useTranslation } from 'react-i18next';

const ProductSearch = () => {
  const { t } = useTranslation();

  return (
    <form
      action=''
      className={`d-flex-column d-md-inline-flex m-2 border-dark   ${styles.root}`}
    >
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <button className={styles.categoryButton}>{t('productSearch.category')}</button>
        <ul className={styles.categoryList}>
          <li>
            <Link to={'#'} className={styles.listElement}>
              {t('productSearch.bed')}
            </Link>
          </li>
          <li>
            <Link to={'#'} className={styles.listElement}>
              {t('productSearch.chair')}
            </Link>
          </li>
          <li>
            <Link to={'#'} className={styles.listElement}>
              {t('productSearch.sofa')}
            </Link>
          </li>
          <li>
            <Link to={'#'} className={styles.listElement}>
              {t('productSearch.table')}
            </Link>
          </li>
          <li>
            <Link to={'#'} className={styles.listElement}>
              {t('productSearch.dining')}
            </Link>
          </li>
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder={t('productSearch.search')} type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
