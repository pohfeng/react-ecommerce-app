import { Fragment, useState } from 'react';

import SearchBar from 'components/Shop/SearchBar';
import Filters from 'components/Shop/Filters';
import ShopListHeader from 'components/Shop/ShopListHeader';
import ItemList from 'components/Shop/ItemList';

import classes from './ShopPage.module.scss';

const ShopPage = () => {
  const [viewMode, setViewMode] = useState('grid');

  const viewModeChangeHandler = (selectedMode) => {
    setViewMode(selectedMode);
  };

  return (
    <Fragment>
      <div className="page-title">
        <b>Shop</b>
      </div>
      <div className={classes.shopPage}>
        <Filters />
        <div className={classes.itemList}>
          <ShopListHeader onViewModeChange={viewModeChangeHandler} />
          <SearchBar />
          <ItemList viewMode={viewMode} />
          {/* <span>ABC</span> */}
          {/* <ItemCard rating={4} price={449.99} name="iphone" description="a phone" /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default ShopPage;
