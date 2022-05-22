import React from 'react';

import classes from './BaseInput.module.scss';

const BaseInput = React.forwardRef((props, ref) => {
  const { id, type, name, label, onChange, onBlur, errors } = props;

  return (
    <div className={classes['form-control']}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        ref={ref}
        autoComplete="off"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={errors?.message ? `${classes.error}` : ''}
      />

      <div className={classes.error}>{errors?.message}</div>
    </div>
  );
});

export default BaseInput;
