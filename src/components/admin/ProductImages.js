import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HomeCardItem from "../HomeCardItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5, 0),
  },
}));

export default function ProductImages() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("//localhost:4000/api/categories", requestOptions)
      .then((response) => response.json())
      .then((result) => setItems(result))
      .catch((error) => console.log("error", error));
  });

  return (
    <div className={classes.root}>
      <Container>
        {items.length && (
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <HomeCardItem image={items[0].image} title={items[0].name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HomeCardItem image={items[1].image} title={items[1].name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HomeCardItem image={items[0].image} title={items[0].name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HomeCardItem image={items[1].image} title={items[1].name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HomeCardItem image={items[0].image} title={items[0].name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HomeCardItem image={items[1].image} title={items[1].name} />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
}
