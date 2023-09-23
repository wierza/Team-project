import React from 'react';
import styles from './SearchPage.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const SearchPage = () => {
  const { searchPhrase } = useParams();
  const products = useSelector(getAll);

  const productsToShow = products.filter(product => product.category === 'chair');

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p>Searched phrase: &quot;{searchPhrase}&quot;</p>
        <div className={styles.row}>
          {productsToShow.map(item => (
            <div key={item.id} className='col-4'>
              <ProductBox {...item} promoted={false} image={`.${item.image}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
