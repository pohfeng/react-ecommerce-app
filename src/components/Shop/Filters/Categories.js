import { FormGroup } from '@mui/material';

import BaseCheckbox from 'components/Common/BaseCheckbox/BaseCheckbox';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { shopActions } from 'store/shop-silce';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.shop.filters);

  const changeHandler = async (label, event) => {
    await dispatch(
      shopActions.SET_FILTER({
        type: 'categories',
        params: {
          value: event.target.checked,
          field: label,
        },
      })
    );
  };

  return (
    <Fragment>
      <div className="title">Categories</div>
      <FormGroup>
        <BaseCheckbox
          onChange={changeHandler}
          label="Mac"
          value={categories.Mac}
        />
        <BaseCheckbox
          onChange={changeHandler}
          label="iPad"
          value={categories.iPad}
        />
        <BaseCheckbox
          onChange={changeHandler}
          label="iPhone"
          value={categories.iPhone}
        />
        <BaseCheckbox
          onChange={changeHandler}
          label="Watch"
          value={categories.Watch}
        />
        <BaseCheckbox
          onChange={changeHandler}
          label="Accessories"
          value={categories.Accessories}
        />
      </FormGroup>
    </Fragment>
  );
};

export default Categories;
