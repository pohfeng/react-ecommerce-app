import Card from 'components/UI/Card';
import classes from './Filters.module.scss';

const Filters = () => {
  return (
    <div className={classes.filtersContainer}>
      <h5 className={classes.title}>Filters</h5>
      <Card className={classes.filtersContainers}>
        <div>Price Range</div>
        <div>Categories</div>
        <div>Brands</div>
        <div>Ratings</div>
        <div>
          <button>Reset Filters</button>
        </div>
      </Card>
    </div>
  );
};

export default Filters;
