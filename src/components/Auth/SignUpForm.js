import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import BaseInput from '../Common/BaseInput/BaseInput';
import Modal from 'components/UI/Modal';

// import { signUp } from '../../services/Auth';
import { signUp } from 'store/user-actions';

import classes from './AuthForm.module.scss';

import { userActions } from 'store/user-slice';
import { useDispatch } from 'react-redux';

const errorHandler = (errors) => {
  errors.forEach((error) => {
    error.message = `Invalid ${error.local.label}`;
  });
  return errors;
};

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .error(errorHandler),
  password: Joi.string().required().error(errorHandler),
  confirmPassword: Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .error(errorHandler),
});

const SigupForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(schema),
  });

  const submitHandler = async (payload) => {
    dispatch(signUp(payload));
    reset();
  };

  const closeModalHandler = () => {
    dispatch(userActions.SET_SHOW_SIGN_UP(false));
  };

  const showSignInFormHandler = () => {
    dispatch(userActions.SET_SHOW_SIGN_UP(false));
    dispatch(userActions.SET_SHOW_SIGN_IN(true));
  };

  const {
    email: emailErrors,
    password: passwordErrors,
    confirmPassword: confirmPasswordErrors,
  } = errors;

  return (
    <Modal onClose={closeModalHandler}>
      <div className={classes.Signup}>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <BaseInput
            label="Email"
            id="signUpEmail"
            type="email"
            {...register('email')}
            errors={emailErrors}
          />
          <BaseInput
            label="Password"
            id="signUpPassword"
            type="password"
            {...register('password')}
            errors={passwordErrors}
          />
          <BaseInput
            label="Confirm Password"
            id="signUpConfirmPassword"
            type="password"
            {...register('confirmPassword')}
            errors={confirmPasswordErrors}
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className={classes.linkControl}>
          <span>Already have an account? </span>
          <span
            className={classes['redirect-text']}
            onClick={showSignInFormHandler}
          >
            Sign In
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default SigupForm;
