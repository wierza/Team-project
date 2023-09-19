import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

import { useTranslation } from 'react-i18next';

const Footer = ({ children }) => {
  const { t } = useTranslation();

  return (
    <footer className={styles.root}>
      <div className={styles.footerMenu}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center col-sm-6 col-md-3'>
              <div className={styles.menuWrapper}>
                {/* <h6>Information</h6> */}
                <h6>{t('footer.information.title')}</h6>
                <ul>
                  <li>
                    <a href='#'>{t('footer.information.about')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.information.policy')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.information.conditions')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.information.support')}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 text-center col-sm-6 col-md-3'>
              <div className={styles.menuWrapper}>
                <h6>{t('footer.account.title')}</h6>
                <ul>
                  <li>
                    <a href='#'>{t('footer.account.login')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.account.cart')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.account.wishlist')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.account.checkout')}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 text-center col-sm-6 col-md-3'>
              <div className={styles.menuWrapper}>
                <h6>{t('footer.informationContinue.title')}</h6>
                <ul>
                  <li>
                    <a href='#'>{t('footer.informationContinue.specials')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.informationContinue.new')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.informationContinue.best')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.informationContinue.our')}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 text-center col-sm-6 col-md-3'>
              <div className={styles.menuWrapper}>
                <h6>{t('footer.orders.title')}</h6>
                <ul>
                  <li>
                    <a href='#'>{t('footer.orders.payment')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.orders.delivery')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.orders.returns')}</a>
                  </li>
                  <li>
                    <a href='#'>{t('footer.orders.shipping')}</a>
                  </li>
                </ul>
              </div>
              <img src='./images/cards.png' alt='Supported credit cards' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 text-center col-md-4 text-left'></div>
            <div
              className={
                'col-12 text-center col-sm-6 text-left col-md-4 text-center ' +
                styles.copyright
              }
            >
              <p>{t('footer.rights.rights')}</p>
            </div>
            <div
              className={
                'col-12 text-center col-sm-6 text-right col-md-4 text-right ' +
                styles.socialMedia
              }
            >
              <ul>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
