import Card from 'components/UI/Card';
import PriceSlider from './Filters/PriceSlider';
import Categories from './Filters/Categories';
import Brands from './Filters/Brands';

import classes from './Filters.module.scss';

import { shopActions } from 'store/shop-silce';
import { useDispatch } from 'react-redux';

const Filters = (props) => {
  const dispatch = useDispatch();

  const applyFilterHandler = () => {
    props.onFilter();
  };

  const clearFilterHandler = () => {
    dispatch(shopActions.RESET_FILTER());
    props.onFilter();
  };

  const containerClasses = props.showSideFilter
    ? `${classes.showSideFilter}`
    : `${classes.filtersContainer}`;

  return (
    <div className={containerClasses}>
      <h5 className={classes.title}>Filters</h5>
      <Card className={classes['filter-box']}>
        <PriceSlider />
        <Categories />
        <Brands />
        <button
          className={classes['apply-filter-button']}
          onClick={applyFilterHandler}
        >
          Apply Filters
        </button>
        <button
          className={classes['reset-button']}
          onClick={clearFilterHandler}
        >
          Reset Filters
        </button>
      </Card>
    </div>
  );
};

export default Filters;
