import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

import { useTranslation } from 'react-i18next';

const FeatureBoxes = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.featureRow}`}>
          <div className={`col-6 col-lg-3 ${styles.featureCol}`}>
            <FeatureBox icon={faTruck}>
              <h5>{t('featureBoxes.shippings.title')}</h5>
              <p>{t('featureBoxes.shippings.subtitle')}</p>
            </FeatureBox>
          </div>
          <div className={`col-6 col-lg-3 ${styles.featureCol}`}>
            <FeatureBox icon={faHeadphones}>
              <h5>{t('featureBoxes.support.title')}</h5>
              <p>{t('featureBoxes.support.subtitle')}</p>
            </FeatureBox>
          </div>
          <div className={`col-6 col-lg-3 ${styles.featureCol}`}>
            <FeatureBox icon={faReplyAll}>
              <h5>{t('featureBoxes.money.title')}</h5>
              <p>{t('featureBoxes.money.subtitle')}</p>
            </FeatureBox>
          </div>
          <div className={`col-6 col-lg-3 ${styles.featureCol}`}>
            <FeatureBox icon={faBullhorn}>
              <h5>{t('featureBoxes.discount.title')}</h5>
              <p>{t('featureBoxes.discount.subtitle')}</p>
            </FeatureBox>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
