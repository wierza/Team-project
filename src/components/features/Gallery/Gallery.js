import React from 'react';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySlider';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='row no-gutters'>
              <div className={'col ' + styles.heading}>
                <h3>FURNITURE GALLERY</h3>
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
                  <span>From</span> $50.80
                </h1>
                <h1>Bedroom Bed</h1>
                <button className={styles.shopNow}>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
