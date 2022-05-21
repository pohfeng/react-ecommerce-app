import { AiOutlineSearch } from 'react-icons/ai';

import classes from './SearchBar.module.scss';

import { shopActions } from 'store/shop-silce';
import { useDispatch } from 'react-redux';

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const inputHandler = async (event) => {
    await dispatch(
      shopActions.SET_FILTER({
        type: 'name',
        params: { value: event.target.value, field: 'name' },
      })
    );
    props.onFilter();
  };

  return (
    <div className={classes.searchBar}>
      <input type="text" placeholder="Search Product" onInput={inputHandler} />
      <span className={classes.iconContainer}>
        <AiOutlineSearch />
      </span>
    </div>
  );
};

export default SearchBar;
