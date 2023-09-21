import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTranslation } from 'react-i18next';

const MenuBar = ({ children }) => {
  const { t } = useTranslation();

  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  return (
    <div className={`position-relative p-0 p-sm-1 ${styles.root}`}>
      <div className='container'>
        <div
          className={`align-items-center d-flex flex-row flex-md-column-reverse flex-xl-row ${styles.test}`}
        >
          <div className='col'>
            <ProductSearch />
          </div>
          <div className={`d-block d-md-none ${styles.mobile}`} type='button'>
            <FontAwesomeIcon
              className={styles.icon}
              icon={isHamburgerClicked ? faTimes : faBars}
              onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
            ></FontAwesomeIcon>
          </div>
          <div
            className={`col-auto d-none d-md-block ${styles.menu} ${
              isHamburgerClicked ? 'd-block' : 'd-none'
            }`}
          >
            <ul className='d-flex flex-column flex-md-row'>
              <li>
                <a href='#' className={styles.active}>
                  {t('menuBar.home')}
                </a>
              </li>
              <li>
                <a href='#'>{t('menuBar.furniture')}</a>
              </li>
              <li>
                <a href='#'>{t('menuBar.chair')}</a>
              </li>
              <li>
                <a href='#'>{t('menuBar.table')}</a>
              </li>
              <li>
                <a href='#'>{t('menuBar.sofa')}</a>
              </li>
              <li>
                <a href='#'>{t('menuBar.bedroom')}</a>
              </li>
              <li>
                <a href='#'>{t('menuBar.blog')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
