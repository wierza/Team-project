import React from 'react';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySlider';
import { useSelector } from 'react-redux';
import { getProductByImage } from '../../../redux/productsRedux';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();

  const imageToFind = './images/furniture/bed/14.jpg';

  const selectedProduct = useSelector(state => getProductByImage(state, imageToFind));

  if (!selectedProduct) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-6'>
            <div className='row no-gutters'>
              <div className={'col ' + styles.heading}>
                <h3>{t('gallery.title')}</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <GallerySlider />
              </div>
            </div>
          </div>
          <div className='col'>
            <div
              className={styles.rightPhoto}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/furniture/bed/14.jpg)`,
              }}
            >
              <div className={styles.photoInfo}>
                <h1>
                  <span>{t('gallery.from')}</span> ${selectedProduct.price}
                </h1>
                <h1>{t('gallery.bed')}</h1>
                <button className={styles.shopNow}>{t('gallery.shop')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
