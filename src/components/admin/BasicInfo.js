import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const categories = [
  {
    //value: "Men",
    label: "Men",
  },
  {
    //value: "Women",
    label: "Women",
  },
];
// const tags = [
//   {
//     values: "H",
//     labels: "Holiday",
//   },
//   {
//     values: "S",
//     labels: "Summer",
//   },
//   {
//     values: "P",
//     labels: "Party",
//   },
//   {
//     values: "DN",
//     labels: "Date Night",
//   },
//   {
//     values: "T",
//     labels: "Travel",
//   },
//   {
//     values: "B",
//     labels: "Beach",
//   },
//   {
//     values: "C",
//     labels: "Comfortable",
//   },
//   {
//     values: "W",
//     labels: "Wedding",
//   },
// ];

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
}));

export default function BasicInfo() {
  const classes = useStyles();
  const [category, setCategory] = React.useState("Women");
  // const [tag, setTag] = React.useState("Women");

  const handleChange = (event) => {
    setCategory(event.target.value || category);
  };

  // const onHandleChange = (event) => {
  //   setTag(event.target.value || tag);
  // };

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="Product Title"
          // id="outlined1-margin-none"
          className={classes.textField}
          variant="outlined"
        />
        <TextField
          // id="outlined-full-width"
          className={classes.textField}
          label="Description"
          // style={{ margin: 8, height: 100 }}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          //id="outlined1-full-width"
          className={classes.textField}
          label="Background"
          // style={{ margin: 8, height: 100 }}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Category"
          // id="outlined-margin-none"
          className={classes.textField}
          variant="outlined"
          select
          onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Slug"
          id="outlined-margin-none"
          //style={{ margin: 8, height: 100 }}
          // fullWidth
          // margin="normal"
          variant="outlined"
        >
          {/* {tags.map((option) => (
            <MenuItem key={option.values} value={option.values}>
              {option.labels}
            </MenuItem>
          ))} */}
        </TextField>
      </div>
    </div>
  );
}
