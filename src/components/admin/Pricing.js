import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100ch",
    height: 100,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Pricing() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          Tax Excluded Price
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={150}
        />
      </FormControl>

      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          Tax Included Price
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={150}
        />
      </FormControl>

      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Tax Rate</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={70}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          Compared Price
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={130}
        />
      </FormControl>
    </div>
  );
}
