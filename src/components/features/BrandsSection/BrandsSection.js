import React from 'react';
import styles from './BrandsSection.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getAllBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Swipeable from '../../common/Swipeable/Swipeable';

const BrandsSection = () => {
  const allBrands = useSelector(getAllBrands);

  const breakpoints = {
    desktop: 6,
    minidesktop: 5,
    tablet: 4,
    mobile: 2,
    watch: 1,
  };

  const [visibleBrandsCount, setVisibleBrandsCount] = useState(breakpoints.desktop);
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);

  const handleArrowLeftClick = e => {
    e.preventDefault();
    const newIndex = firstVisibleIndex - visibleBrandsCount;
    if (newIndex >= 0) {
      setFirstVisibleIndex(newIndex);
    } else {
      setFirstVisibleIndex(0);
    }
  };

  const handleArrowRightClick = e => {
    e.preventDefault();
    const newIndex = firstVisibleIndex + visibleBrandsCount;
    if (newIndex <= allBrands.length - visibleBrandsCount) {
      setFirstVisibleIndex(newIndex);
    } else {
      setFirstVisibleIndex(allBrands.length - visibleBrandsCount);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setVisibleBrandsCount(breakpoints.desktop);
      } else if (window.innerWidth >= 991) {
        setVisibleBrandsCount(breakpoints.minidesktop);
      } else if (window.innerWidth >= 768) {
        setVisibleBrandsCount(breakpoints.tablet);
      } else if (window.innerWidth >= 410) {
        setVisibleBrandsCount(breakpoints.mobile);
      } else {
        setVisibleBrandsCount(breakpoints.watch);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [
    breakpoints.desktop,
    breakpoints.minidesktop,
    breakpoints.mobile,
    breakpoints.tablet,
    breakpoints.watch,
  ]);

  return (
    <Swipeable onLeftSwipe={handleArrowLeftClick} onRightSwipe={handleArrowRightClick}>
      <div className={styles.root}>
        <div className='container'>
          <div className={`row ${styles.brandsSectionRow}`}>
            <div className={`col ${styles.sectionElementsWrapper}`}>
              <Button
                className={`${styles.arrowButtonLeft}`}
                variant='small'
                onClick={handleArrowLeftClick}
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className={styles.angleLeft}
                ></FontAwesomeIcon>
              </Button>
              <div className={`row ${styles.brandsWrapper}`}>
                {allBrands
                  .slice(firstVisibleIndex, firstVisibleIndex + visibleBrandsCount)
                  .map(item => (
                    <div key={item.id} className={`col ${styles.brandImage}`}>
                      <img src={item.image} alt='brand' />
                    </div>
                  ))}
              </div>
              <Button
                className={`${styles.arrowButtonRight}`}
                variant='small'
                onClick={handleArrowRightClick}
              >
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={styles.angleRight}
                ></FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

export default BrandsSection;
