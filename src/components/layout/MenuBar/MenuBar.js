import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuBar = ({ children }) => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='align-items-center d-flex flex-row flex-md-column-reverse flex-xl-row'>
          <div className='d-block d-md-none'>
            <FontAwesomeIcon
              icon={isHamburgerClicked ? faTimes : faBars}
              onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
            ></FontAwesomeIcon>
          </div>

          <div className='col'>
            <ProductSearch />
          </div>
          <div
            className={`col-auto d-none d-md-block ${styles.menu} {${isHamburgerClicked} ? ${styles.open}:"}`}
          >
            <ul>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
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
