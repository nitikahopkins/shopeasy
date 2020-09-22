import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import axios from "axios";

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

export default function Category(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    slug: "",
    image: "",
  });
  useEffect(() => {
    if (!props.edit) {
      return;
    }
    const fetchData = async () => {
      let { data } = await axios
        .get(`//localhost:4000/api/categories/${props.slug}`)

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
      .put(`//localhost:4000/api/categories/${values.slug}`, {
        name: values.name,
        image: values.image,
      })
      .catch((error) => console.log("error", error));
  };
  const createCategory = () => {
    return axios
      .post("//localhost:4000/api/categories", {
        name: values.name,
        image: values.image,
        slug: values.slug,
      })
      .catch((error) => console.log("error", error));
  };
  const onSubmit = (prop) => {
    const { slug, name, image } = values;
    if (!slug || !image || !name) {
      return;
    }
    if (props.edit) {
      return updateCategory();
    }
    return createCategory();
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onSubmit}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            id="name"
            value={values.name}
            onChange={handleChange("name")}
            labelWidth={30}
          />
        </FormControl>

        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="slug">Slug</InputLabel>
          <OutlinedInput
            id="slug"
            value={values.slug}
            onChange={handleChange("slug")}
            labelWidth={30}
          />
        </FormControl>
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
        <Button variant="contained" color="secondary" type="submit">
          {props.edit ? "UPDATE" : "CREATE"}
        </Button>
      </form>
    </div>
  );
}
