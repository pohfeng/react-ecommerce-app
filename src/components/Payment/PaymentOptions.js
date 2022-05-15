import classes from './PaymentOptions.module.scss';

import Card from 'components/UI/Card';

const PaymentOptions = () => {
  return (
    <Card className={classes['payment-options']}>
      <strong>Payment Options</strong>
      <small>Choose your payment method</small>
      <div className={classes['saved-card']}>
        <div>
          <strong>Ali</strong>
        </div>
        <div className={classes['card-info']}>
          <input type="radio" id="saved-card" name="payment" />
          <label htmlFor="card">Fake bank Debit Card 1234 XXXX XXXX 7890</label>
        </div>
        <div className={classes['payment-action']}>
          <span>Enter CVV: </span>
          <input type="text" />
        </div>
      </div>
      <hr />
      <div className={classes['payment-method']}>
        <div>
          <input
            type="radio"
            id="card"
            name="payment"
            className={classes['radio-btn']}
          />
          <label htmlFor="card">Credit Card / Debit Card</label>
        </div>
        <div>
          <input
            type="radio"
            id="online"
            name="payment"
            className={classes['radio-btn']}
          />
          <label htmlFor="online">Online Banking (FPX)</label>
        </div>
        <div>
          <input
            type="radio"
            id="cod"
            name="payment"
            className={classes['radio-btn']}
          />
          <label htmlFor="cod">Cash On Delivery</label>
        </div>
      </div>
      <hr />
      <button>Continue</button>
    </Card>
  );
};

export default PaymentOptions;
