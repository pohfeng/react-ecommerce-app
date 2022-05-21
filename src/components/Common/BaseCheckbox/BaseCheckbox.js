import { deepPurple } from '@mui/material/colors';
import { Checkbox, FormControlLabel } from '@mui/material';

const BaseCheckbox = (props) => {
  const label = { inputProps: { 'aria-label': props.label } };

  return (
    <FormControlLabel
      control={
        <Checkbox
          {...label}
          sx={{
            color: deepPurple['A400'],
            '&.Mui-checked': {
              color: deepPurple['A200'],
            },
          }}
          onChange={props.onChange.bind(null, props.label)}
        />
      }
      label={props.label}
      checked={props.value}
    />
  );
};

export default BaseCheckbox;
