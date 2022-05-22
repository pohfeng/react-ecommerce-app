import { Fragment } from 'react';
import { Slider, Box } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { shopActions } from 'store/shop-silce';

const valuetext = (value) => {
  return `RM${value}`;
};

const minDistance = 2000;

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple['A400'],
    },
  },
});

const PriceSlider = () => {
  const dispatch = useDispatch();
  const { priceRange } = useSelector((state) => state.shop.filters);

  const setPriceRange = async (value) => {
    await dispatch(
      shopActions.SET_FILTER({
        type: 'priceRange',
        params: {
          value: value,
          field: 'priceRange',
        },
      })
    );
  };

  const priceRangeChangeHandler = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 9000 - minDistance);
        setPriceRange([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPriceRange([clamped - minDistance, clamped]);
      }
    } else {
      setPriceRange(newValue);
    }
  };

  return (
    <Fragment>
      <div>Price</div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: 240,
            padding: 3,
            paddingTop: 5,
            paddingBottom: 2,
          }}
        >
          <Slider
            getAriaLabel={() => 'Price Range'}
            value={priceRange}
            onChange={priceRangeChangeHandler}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            max={9000}
            disableSwap
          />
        </Box>
      </ThemeProvider>
    </Fragment>
  );
};

export default PriceSlider;
