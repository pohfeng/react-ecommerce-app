import { useState } from 'react';
import classes from './Colors.module.scss';

const Colors = (props) => {
  const { colorClass } = props;
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    setIsFocus(true);
  };

  const blurHandler = () => {
    setIsFocus(false);
  };

  const optionClasses = isFocus
    ? `${classes[`br-${colorClass}`]} ${classes['color-option']}`
    : 'color-option';

  return (
    <li
      tabIndex="0"
      className={classes['variant-list']}
      onFocus={focusHandler}
      onBlur={blurHandler}
    >
      <div className={optionClasses}>
        <div
          className={`${classes[`bg-${colorClass}`]} ${classes.filloption}`}
        />
      </div>
    </li>
  );
};

export default Colors;
