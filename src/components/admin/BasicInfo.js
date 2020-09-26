import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(1),
    width: "100ch",
    height: 80,
  },
}));

export default function BasicInfo(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: "",
    slug: "",
    price: "",
    description: "",
    background: "",
    image: "",
    estimated_shipping: "",
  });
  useEffect(() => {
    if (!props.edit) {
      return;
    }
    const fetchData = async () => {
      let { data } = await axios
        .get(`//localhost:4000/api/products/${props.id}`)

        .catch((error) => console.log("error", error));
      setValues(data);
    };
    fetchData();
  }, [props]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const updateCategory = () => {
    return axios
      .put(`//localhost:4000/api/products/${values.id}`, {
        title: values.tile,
        slug: values.slug,
        price: values.price,
        description: values.description,
        background: values.background,
        image: values.image,
        estimated_shipping: values.estimated_shipping,
      })
      .catch((error) => console.log("error", error));
  };
  const createCategory = () => {
    return axios
      .post("//localhost:4000/api/products", {
        title: values.tile,
        slug: values.slug,
        price: values.price,
        description: values.description,
        background: values.background,
        image: values.image,
        estimated_shipping: values.estimated_shipping,
      })
      .catch((error) => console.log("error", error));
  };
  const onSubmit = (prop) => {
    const {
      title,
      slug,
      price,
      description,
      background,
      image,
      estimated_shipping,
    } = values;
    if (
      !title ||
      !slug ||
      !price ||
      !description ||
      !background ||
      !image ||
      estimated_shipping
    ) {
      return;
    }
    if (props.edit) {
      return updateCategory();
    }
    return createCategory();
  };
  // const [category, setCategory] = React.useState("Women");
  // const [tag, setTag] = React.useState("Women");

  // const handleChange = (event) => {
  //   setCategory(event.target.value || category);
  // };

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
          value={values.title}
          onChange={handleChange("title")}
        />
        <TextField
          // id="outlined-full-width"
          className={classes.textField}
          label="Description"
          // style={{ margin: 8, height: 100 }}
          //fullWidth
          //margin="normal"
          variant="outlined"
          value={values.description}
          onChange={handleChange("description")}
        />
        <TextField
          //id="outlined1-full-width"
          className={classes.textField}
          label="Background"
          // style={{ margin: 8, height: 100 }}
          // fullWidth
          // margin="normal"
          variant="outlined"
          value={values.background}
          onChange={handleChange("background")}
        />
        <br />
        {/* <TextField
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
        </TextField> */}
        <TextField
          label="Slug"
          id="outlined-margin-none"
          className={classes.textField}
          //style={{ margin: 8, height: 100 }}
          // fullWidth
          // margin="normal"
          variant="outlined"
          value={values.slug}
          onChange={handleChange("slug")}
        />

        <TextField
          label="Price"
          id="outlined-margin-none"
          className={classes.textField}
          // fullWidth
          // margin="normal"
          variant="outlined"
          value={values.price}
          onChange={handleChange("price")}
        />
        <TextField
          htmlFor="image"
          label="Product Image"
          className={classes.textField}
          variant="outlined"
          value={values.image}
          onChange={handleChange("image")}
        />
        <img src={values.image} alt={values.name} height="200" width="100" />
        {/* {tags.map((option) => (
            <MenuItem key={option.values} value={option.values}>
              {option.labels}
            </MenuItem>
          ))} */}
      </div>
    </div>
  );
}
