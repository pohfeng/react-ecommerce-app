import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridViewItemCard from './GridView/ItemCard';
import ListViewItemCard from './ListView/ItemCard';

import { fetchShopData } from '../../store/shop-actions';

import classes from './ItemList.module.scss';

const ItemList = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shop.items);
  const isGridMode = props.viewMode === 'grid';

  useEffect(() => {
    dispatch(fetchShopData());
  }, [dispatch]);

  const gridViewShopItems = items.map((item) => {
    return <GridViewItemCard key={item.id} {...item} />;
  });

  const listViewShopItems = items.map((item) => {
    return <ListViewItemCard key={item.id} {...item} />;
  });

  const listClassName = isGridMode
    ? `${classes['grid-view']}`
    : `${classes['list-view']}`;

  return (
    <div className={listClassName}>
      {isGridMode ? gridViewShopItems : listViewShopItems}
    </div>
  );
};

export default ItemList;
