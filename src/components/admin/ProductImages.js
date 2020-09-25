import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5, 0),
  },
}));

export default function ProductImages() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    // name: "",
    // slug: "",
    // image: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch("//localhost:4000/api/categories", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => setItems(result))
  //     .catch((error) => console.log("error", error));
  // });

  return (
    <div className={classes.root}>
      <form>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="image">Image</InputLabel>
          <OutlinedInput
            id="image"
            value={values.image}
            onChange={handleChange("image")}
            labelWidth={30}
          />
          <img src={values.image} alt={values.name} height="200" width="100" />
        </FormControl>
      </form>
    </div>
  );
}
