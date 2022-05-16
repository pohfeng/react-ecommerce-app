import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import BaseInput from '../Common/BaseInput/BaseInput';
import Modal from 'components/UI/Modal';

// import { logIn } from '../../services/Auth';

import classes from './AuthForm.module.scss';

import { userActions } from 'store/user-slice';

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
  password: Joi.string().required().label('Password').error(errorHandler),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(schema),
  });

  const submitHandler = async (event) => {
    console.log(event);
    // const response = await logIn({
    //   email: event.email,
    //   password: event.password,
    //   returnSecureToken: true,
    // });
    // if (response.data?.idToken) reset();

    // console.log('LogIn: ', response.data);
  };

  const closeModalHandler = () => {
    dispatch(userActions.SET_SHOW_SIGN_IN(false));
  };

  const showSignUpFormHandler = () => {
    dispatch(userActions.SET_SHOW_SIGN_IN(false));
    dispatch(userActions.SET_SHOW_SIGN_UP(true));
  };

  const { email: emailErrors, password: passwordErrors } = errors;

  return (
    <Modal onClose={closeModalHandler}>
      <section className={classes.Login}>
        <div>
          <h1>Login</h1>
          <p>Please Sign in to continue</p>
          <form onSubmit={handleSubmit(submitHandler)}>
            <BaseInput
              label="Email"
              id="signInEmail"
              type="email"
              {...register('email')}
              errors={emailErrors}
            />
            <BaseInput
              label="Password"
              id="signInPassword"
              type="password"
              {...register('password')}
              errors={passwordErrors}
            />
            <button type="submit">Sign In</button>
          </form>
          <div className={classes.linkControl}>
            <span>Don't have an account? </span>
            <span
              className={classes['redirect-text']}
              onClick={showSignUpFormHandler}
            >
              Sign Up
            </span>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default LoginForm;
