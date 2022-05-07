import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ItemCard from './ItemCard';

import { fetchShopData } from '../../../store/shop-actions';

import classes from './ItemList.module.scss';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shop.items);

  useEffect(() => {
    dispatch(fetchShopData());
  }, [dispatch]);

  const shopItems = items.map((item) => {
    return <ItemCard key={item.id} {...item} />;
  });

  return <div className={classes['grid-view']}>{shopItems}</div>;
};

export default ItemList;
