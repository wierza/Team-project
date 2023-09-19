import React from 'react';
import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import BrandsSection from '../../features/BrandsSection/BrandsSection';
import Gallery from '../../features/Gallery/Gallery';
import Sale from '../../features/Sale/Sale';
import Feedback from '../../features/Feedback/Feedback';
import Promoted from '../../features/Promoted/Promoted';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Sale />
    <NewFurniture />
    <BrandsSection />
    <Gallery />
    <Feedback />
  </div>
);

export default Homepage;
