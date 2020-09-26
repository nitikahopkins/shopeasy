import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HomeCardItem from "./HomeCardItem";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //  padding: theme.spacing(5, 0),
    padding: 10,
  },
  paper: {
    // height: "12vh",
    //width: 300,
  },
}));

export default function HomeCards() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios
        .get("//localhost:4000/api/categories")
        .catch((error) => console.log("error", error));
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        {items.length && (
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <HomeCardItem image={items[0].image} title={items[0].name} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <HomeCardItem image={items[1].image} title={items[1].name} />
              </Paper>
            </Grid>
            {/* <Grid item xs={12}>
              <HomeCardItem image={items[2].image} title={items[2].name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HomeCardItem image={items[3].image} title={items[3].name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <HomeCardItem image={items[4].image} title={items[4].name} />
            </Grid> */}
          </Grid>
        )}
      </Container>
    </div>
  );
}
