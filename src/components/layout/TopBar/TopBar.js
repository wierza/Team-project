import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

import { useTranslation } from 'react-i18next';

const TopBar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <a href='#'>
                  USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li
                onClick={() => {
                  handleChangeLanguage('en');
                }}
              >
                <a href='#'>{t('topBar.language.english')} </a>
              </li>
              <li
                onClick={() => {
                  handleChangeLanguage('pl');
                }}
              >
                <a href='#'>{t('topBar.language.polish')}</a>
              </li>
              <li>
                <a href='#'>
                  {t('topBar.help')}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`col text-right ${styles.topMenu}`}>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />
                  <span>{t('topBar.login')}</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />
                  <span>{t('topBar.register')}</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// TopBar.propTypes = {};

export default TopBar;
