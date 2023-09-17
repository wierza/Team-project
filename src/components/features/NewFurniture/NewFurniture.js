import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { connect } from 'react-redux';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    splitPage: true,
    viewport: this.props.viewport.mode,
    productsCount: 8,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  componentDidUpdate() {
    if (this.props.viewport.mode !== this.state.viewport) {
      const newProductsCount = this.getProductCountToViewport(this.props.viewport.mode);

      this.setState({
        productsCount: newProductsCount,
        viewport: this.props.viewport.mode,
      });
    }
  }

  getProductCountToViewport(mode) {
    switch (mode) {
      case 'mobile':
        return 2;
      case 'tablet':
        return 3;
      case 'desktop':
        return 5;
      default:
        return 8;
    }
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage, productsCount } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsCount);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {categoryProducts
              .slice(activePage * productsCount, (activePage + 1) * productsCount)
              .map(item => (
                <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  viewport: PropTypes.string,
  mode: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

const mapStateToProps = state => ({
  viewport: state.viewport,
});

export default connect(mapStateToProps)(NewFurniture);
