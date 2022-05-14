import { AiOutlineSearch } from 'react-icons/ai';

import classes from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <input type="text" placeholder="Search Product" />
      <span className={classes.iconContainer}>
        <AiOutlineSearch />
      </span>
    </div>
  );
};

export default SearchBar;
