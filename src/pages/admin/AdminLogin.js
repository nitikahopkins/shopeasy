import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate, redirectTo } from "@reach/router";
import Admin from "./Admin";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
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
export default function AdminHome() {
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
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div>
        {signedInUser ? (
          navigateToAdminRoute()
        ) : (
          // <Button color="inherit" onClick={signOut}>
          //   Logout
          // </Button>
          //  <Admin signOut={signOut} />
          //  <Admin />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form>
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
                onClick={signIn}
              >
                Sign In
              </Button>
            </form>
          </div>
        )}
        {/* <Box mt={5}>
          <Copyright />
        </Box> */}
      </div>
    </Grid>
    //  </Grid>
  );
}
