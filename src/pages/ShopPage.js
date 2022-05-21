import { Fragment, useEffect, useState } from 'react';

import SearchBar from 'components/Shop/SearchBar';
import Filters from 'components/Shop/Filters';
import ShopListHeader from 'components/Shop/ShopListHeader';
import ItemList from 'components/Shop/ItemList';
import PageNoSelector from 'components/Table/PageNoSelector';

import classes from './ShopPage.module.scss';

import { shopActions } from 'store/shop-silce';
import { useDispatch, useSelector } from 'react-redux';

const ShopPage = () => {
  const dispatch = useDispatch();
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const filteredItems = useSelector((state) => state.shop.filteredItems.length);
  const [sortInfo, setSortInfo] = useState(['name', 'asc']);

  useEffect(() => {
    const offset = (currentPage - 1) * 9;
    dispatch(shopActions.CHANGE_PAGE({ offset }));
  }, [dispatch, currentPage]);

  const viewModeChangeHandler = (selectedMode) => {
    setViewMode(selectedMode);
  };

  const pageChangeHandler = (newPage) => {
    setCurrentPage(newPage);
  };

  const filterHandler = async (event) => {
    const filterValue = event.target.value;

    await dispatch(shopActions.FILTER_ITEMS({ name: filterValue }));
    dispatch(
      shopActions.SORT_ITEMS({ sortBy: sortInfo[0], sortOrder: sortInfo[1] })
    );
  };

  const sortHandler = (event) => {
    const info = event.target.value.split('-');
    setSortInfo(info);
    dispatch(shopActions.SORT_ITEMS({ sortBy: info[0], sortOrder: info[1] }));
  };

  return (
    <Fragment>
      <div className="page-title">
        <b>Shop</b>
      </div>
      <div className={classes.shopPage}>
        <Filters />
        <div className={classes.itemList}>
          <ShopListHeader
            onSortSelect={sortHandler}
            onViewModeChange={viewModeChangeHandler}
          />
          <SearchBar onFilter={filterHandler} />
          <ItemList viewMode={viewMode} />
          {/* <span>ABC</span> */}
          {/* <ItemCard rating={4} price={449.99} name="iphone" description="a phone" /> */}
        </div>
      </div>
      <PageNoSelector
        totalPages={filteredItems / 9}
        onChange={pageChangeHandler}
      />
    </Fragment>
  );
};

export default ShopPage;
