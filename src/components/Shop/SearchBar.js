import { AiOutlineSearch } from 'react-icons/ai';

import classes from './SearchBar.module.scss';

const SearchBar = (props) => {
  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        placeholder="Search Product"
        onInput={props.onFilter}
      />
      <span className={classes.iconContainer}>
        <AiOutlineSearch />
      </span>
    </div>
  );
};

export default SearchBar;
