import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(10, 0),
    opacity: 0.5,
    marginTop: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  facebook: {
    color: "#1877f2",
  },
  twitter: {
    color: "#1da1f2",
  },
  instagram: {
    color: "#803ab9",
  },
  icons: {
    fontSize: 50,
  },
}));

export default function TheFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container>
          <Grid item xs={8} sm={3}>
            <Link
              href="https://facebook.com"
              target="_blank"
              className={classes.facebook}
            >
              <FacebookIcon className={classes.icons} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className={classes.twitter}
            >
              <TwitterIcon className={classes.icons} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className={classes.instagram}
            >
              <InstagramIcon className={classes.icons} />
            </Link>
          </Grid>
          <Grid item xs={8} sm={9}>
            Footer Menu
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
