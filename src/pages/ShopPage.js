import { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

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
  const [showSideFilter, setShowSideFilter] = useState(false);
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

  const filterHandler = async () => {
    setShowSideFilter(false);
    dispatch(shopActions.FILTER_ITEMS());
    dispatch(
      shopActions.SORT_ITEMS({ sortBy: sortInfo[0], sortOrder: sortInfo[1] })
    );
  };

  const sortHandler = (event) => {
    const info = event.target.value.split('-');
    setSortInfo(info);
    dispatch(shopActions.SORT_ITEMS({ sortBy: info[0], sortOrder: info[1] }));
  };

  const openSideFilterHandler = () => {
    setShowSideFilter(true);
  };

  const backdropCloseHandler = () => {
    setShowSideFilter(false);
  };

  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
  };

  const portalElement = document.getElementById('overlays');

  return (
    <Fragment>
      {showSideFilter &&
        ReactDOM.createPortal(
          <Backdrop onClose={backdropCloseHandler} />,
          portalElement
        )}
      <div className="page-title">
        <b>Shop</b>
      </div>
      <div className={classes.shopPage}>
        <Filters onFilter={filterHandler} showSideFilter={showSideFilter} />
        <div className={classes.itemList}>
          <ShopListHeader
            onSortSelect={sortHandler}
            onViewModeChange={viewModeChangeHandler}
            onOpenSideFilter={openSideFilterHandler}
          />
          <SearchBar onFilter={filterHandler} />
          <ItemList viewMode={viewMode} />
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
