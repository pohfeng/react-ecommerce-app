import { MdOutlineGridView, MdFormatListBulleted } from 'react-icons/md';

import classes from './ShopListHeader.module.scss';

const ShopHeader = (props) => {
  const gridViewClickHandler = () => {
    props.onViewModeChange('grid');
  };

  const listViewClickHandler = () => {
    props.onViewModeChange('list');
  };

  return (
    <div className={classes.header}>
      <h5>27 Result Found</h5>
      <select
        name="item-sort-selector"
        className={classes.itemSort}
        onChange={props.onSortSelect}
      >
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low-High)</option>
        <option value="price-desc">Price (High-Low)</option>
        <option value="rating-asc">Rating (Lowest)</option>
        <option value="rating-desc">Rating (Highest)</option>
      </select>
      <div className={classes.btnGroup}>
        <button
          className={classes.gridView}
          onClick={gridViewClickHandler}
          autoFocus
        >
          <MdOutlineGridView className={classes.icon} />
        </button>
        <button className={classes.listView} onClick={listViewClickHandler}>
          <MdFormatListBulleted className={classes.icon} />
        </button>
      </div>
    </div>
  );
};

export default ShopHeader;
