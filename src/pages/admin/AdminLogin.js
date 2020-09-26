import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "@reach/router";
//import { withAuthenticator } from "@aws-amplify/ui-react";
import Admin from "./Admin";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1517146783983-418c681b56c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  row: { display: "flex", flexWrap: "wrap" },
  coloumn: {
    maxWidth: "33%",
  },
  innerImage: {
    width: "25vw",
    borderRadius: ".5vw",
    padding: 1,
  },
}));
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }
function AdminHome() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [signedInUser, setSignedInUser] = useState(undefined);
  const [signInForm, setSignedInForm] = useState({
    username: "",
    password: "",
  });
  async function signOut() {
    try {
      await Auth.signOut({ global: true }).then(() => {
        window.location = "/";
      });
    } catch (error) {
      console.log(error);
    }
  }
  function navigateToAdminRoute() {
    return navigate("/admin");
  }
  async function signIn() {
    try {
      console.log(signInForm);
      const user = await Auth.signIn(signInForm.username, signInForm.password);
      // setSignedInUser(user);
      console.log(user);
      console.log(await Auth.currentAuthenticatedUser());
      navigateToAdminRoute();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    // <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <CssBaseline />
        <div>
          {signedInUser ? (
            navigateToAdminRoute()
          ) : (
            // <Button color="inherit" onClick={signOut}>
            //   Logout
            // </Button>
            //  <Admin signOut={signOut} />
            //  <Admin />
            //     <Grid item xs={false} sm={4} md={7} className={classes.image} />
            // <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  id="email"
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  autoFocus
                  onChange={(e) =>
                    setSignedInForm({
                      ...signInForm,
                      username: e.target.value,
                    })
                  }
                />
                <TextField
                  id="password"
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                  autoFocus
                  onChange={(e) =>
                    setSignedInForm({
                      ...signInForm,
                      password: e.target.value,
                    })
                  }
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  onClick={signIn}
                >
                  Sign In
                </Button>
              </form>
              <img
                src="https://img.icons8.com/color/48/000000/easy-to-find.png"
                alt="logo"
              />
              <Typography variant="h6">ShopEasy</Typography>
            </div>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

export default AdminHome;
