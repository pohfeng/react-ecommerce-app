import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ProductDetails from 'components/Product/ProductDetails';
import ProductFeatures from 'components/Product/ProductFeatures';
import RelatedProducts from 'components/Product/RelatedProducts';

import { IoHomeOutline } from 'react-icons/io5';
import { FiChevronRight, FiShoppingCart } from 'react-icons/fi';

import classes from './ProductPage.module.scss';

const ProductPage = () => {
  return (
    <Fragment>
      <div className="page-title">
        <b>Item Details</b>
      </div>
      <div className={classes['details-flow']}>
        <Link className={classes['home-btn']} to="/shop">
          <IoHomeOutline />
        </Link>
        <div className={classes['right-arrow']}>
          <FiChevronRight />
        </div>
        <button className={classes['nav-button']}>
          <div className={classes['icon-container']}>
            <FiShoppingCart />
          </div>
          <div className={classes['description']}>
            <strong>Cart</strong>
            <small>View cart item</small>
          </div>
        </button>
      </div>
      <div className={classes['product-page']}>
        <ProductDetails />
        <ProductFeatures />
        <RelatedProducts />
      </div>
    </Fragment>
  );
};

export default ProductPage;
