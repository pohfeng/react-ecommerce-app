import PaymentOptions from 'components/Payment/PaymentOptions';
import PriceDetails from 'components/Payment/PriceDetails';

import Card from 'components/UI/Card';
import classes from './PaymentPage.module.scss';

const PaymentPage = () => {
  return (
    <Card className={classes['payment-page']}>
      <PaymentOptions />
      <PriceDetails />
    </Card>
  );
};

export default PaymentPage;
