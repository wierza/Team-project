import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import StickyBar from '../StickyBar/StickyBar';
import { connect } from 'react-redux';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fade: true,
    splitPage: true,
    viewport: this.props.viewport.mode,
    productsCount: 8,
  };

  handlePageChange(newPage) {
    this.setState({ fade: false });
    setTimeout(() => {
      this.setState({ activePage: newPage });
      this.setState({ fade: true });
    }, 500);
  }

  handleCategoryChange(newCategory) {
    this.setState({ fade: false });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
      this.setState({ fade: true });
    }, 750);
  }

  getCurrentPageCountLength = () => {
    let length =
      this.props.products.filter(item => item.category === this.state.activeCategory)
        .length / 8;
    return length;
  };

  onLeftSwipe = e => {
    e.preventDefault();
    const { activePage, activeCategory } = this.state;
    if (activePage > 0) {
      this.setState({ activePage: activePage - 1 });
    } else {
      const categories = this.props.categories;
      const activeCategoryIndex = categories.findIndex(
        cat => cat.id === activeCategory
      );
      if (activeCategoryIndex > 0) {
        const newCategory = categories[activeCategoryIndex - 1].id;
        const categoryProducts = this.props.products.filter(
          item => item.category === newCategory
        );
        const newActivePage = Math.floor(categoryProducts.length / 8);
        this.setState({ activeCategory: newCategory, activePage: newActivePage });
      }
    }
  };

  onRightSwipe = e => {
    e.preventDefault();
    const { activePage, activeCategory } = this.state;
    const currentPageCount = this.getCurrentPageCountLength();
    const categories = this.props.categories;
    const activeCategoryIndex = categories.findIndex(cat => cat.id === activeCategory);

    if (activePage < currentPageCount - 1) {
      this.setState({ activePage: activePage + 1 });
    } else if (activeCategoryIndex < categories.length - 1) {
      const newCategory = categories[activeCategoryIndex + 1].id;
      this.setState({ activeCategory: newCategory, activePage: 0 });
    }
  };

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
    const { fade } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsCount);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable onLeftSwipe={this.onLeftSwipe} onRightSwipe={this.onRightSwipe}>
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
                      <li key={item.name}>
                        <a
                          className={item.id === activeCategory ? styles.active : ''}
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
          </div>
          <div className='container'>
            <div className={styles.swipeButton}>
              <Button
                variant='outline'
                onClick={this.onLeftSwipe}
                className={styles.leftButton}
              >
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </Button>
              <Button
                variant='outline'
                onClick={this.onRightSwipe}
                className={styles.rightButton}
              >
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </Button>
            </div>
            <div className={`row + ${fade ? styles.fadeIn : styles.fadeOut}`}>
              {categoryProducts
                .slice(activePage * productsCount, (activePage + 1) * productsCount)
                .map(item => (
                  <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </div>
          <StickyBar />
        </div>
      </Swipeable>
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
