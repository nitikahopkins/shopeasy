import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

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

export default function Inventory() {
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
        <InputLabel htmlFor="outlined-adornment-amount">SKU</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          labelWidth={30}
        />
      </FormControl>

      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Quantity</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          onChange={handleChange("amount")}
          labelWidth={30}
        />
      </FormControl>
    </div>
  );
}
