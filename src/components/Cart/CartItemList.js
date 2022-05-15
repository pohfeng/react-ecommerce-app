import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';

// import classes from './CartItemList.module.scss';

import { fetchCartItems } from 'store/cart-actions';

const CartList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const cartItemList = cartItems.map((item) => {
    return <CartItem {...item} />;
  });

  return <div>{cartItemList}</div>;
};

export default CartList;
