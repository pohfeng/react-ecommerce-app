import { FormGroup } from '@mui/material';

import BaseCheckbox from 'components/Common/BaseCheckbox/BaseCheckbox';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Brands.module.scss';

import { shopActions } from 'store/shop-silce';

const Brands = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.shop.filters);

  const changeHandler = async (label, event) => {
    await dispatch(
      shopActions.SET_FILTER({
        type: 'brands',
        params: {
          value: event.target.checked,
          field: label,
        },
      })
    );
  };

  return (
    <Fragment>
      <div className={classes.title}>Brands</div>
      <FormGroup>
        <BaseCheckbox
          onChange={changeHandler}
          label="Apple"
          value={brands.Apple}
        />
        <BaseCheckbox
          onChange={changeHandler}
          label="Beats"
          value={brands.Beats}
        />
      </FormGroup>
    </Fragment>
  );
};

export default Brands;
