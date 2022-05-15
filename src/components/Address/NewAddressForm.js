import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { nanoid } from '@reduxjs/toolkit';

import BaseInput from 'components/Common/BaseInput/BaseInput';
import Card from 'components/UI/Card';

import classes from './NewAddressForm.module.scss';
import { useDispatch } from 'react-redux';

import { userActions } from 'store/user-slice';

const schema = Joi.object({
  name: Joi.string().required().label('Name'),
  address: Joi.string().required().label('Address'),
  postcode: Joi.string().required().label('Postcode'),
  city: Joi.string().required().label('City'),
  state: Joi.string().required().label('State'),
  phone_no: Joi.string().required().label('Mobile Number'),
});

const NewAddressForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(schema),
  });

  const {
    name: nameErrors,
    address: addressErrors,
    postcode: postcodeErrors,
    city: cityErrors,
    state: stateErrors,
    phone_no: phoneNoErrors,
  } = errors;

  const submitHandler = (event) => {
    const payloadData = {
      id: nanoid(),
      name: event.name,
      address: event.address,
      postcode: event.postcode,
      city: event.city,
      state: event.state,
      phone_no: event.phone_no,
    };
    dispatch(userActions.ADD_ADDRESS(payloadData));
    reset();
  };

  return (
    <div>
      <Card className={classes['address-form']}>
        <div>
          <strong>Add New Address</strong>
        </div>
        <div>
          <small>Save and use a new address for delivery</small>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <BaseInput
            label="Name"
            id="name"
            type="text"
            {...register('name')}
            errors={nameErrors}
          />
          <BaseInput
            label="Address"
            id="address"
            type="text"
            {...register('address')}
            errors={addressErrors}
          />
          <BaseInput
            label="Postcode"
            id="postcode"
            type="text"
            {...register('postcode')}
            errors={postcodeErrors}
          />
          <BaseInput
            label="City"
            id="city"
            type="text"
            {...register('city')}
            errors={cityErrors}
          />
          <BaseInput
            label="State"
            id="state"
            type="text"
            {...register('state')}
            errors={stateErrors}
          />
          <BaseInput
            label="Mobile Number"
            id="phone_no"
            type="text"
            {...register('phone_no')}
            errors={phoneNoErrors}
          />
          <button type="submit">Save and Deliver Here</button>
        </form>
      </Card>
    </div>
  );
};

export default NewAddressForm;
