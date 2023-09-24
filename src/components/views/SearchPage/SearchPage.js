import React from 'react';
import styles from './SearchPage.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const { search } = useLocation();
  const searchLine = new URLSearchParams(search);
  const searchPhrase = String(searchLine.get('q'));

  const products = useSelector(getAll);
  const productsToShow = products.filter(product => product.category === searchPhrase);

  return (
    <div className={styles.root}>
      <div className={'container'}>
        <p>Search phrase: &quot;{searchPhrase}&quot;</p>
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
