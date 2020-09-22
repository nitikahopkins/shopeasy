import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouteLink } from "@reach/router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SetUsername({ signUpForm, setSignUpForm }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter Your Email and Password!
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(event) =>
                  setSignUpForm({ ...signUpForm, email: event.target.value })
                }
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={signUpForm.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(event) =>
                  setSignUpForm({ ...signUpForm, password: event.target.value })
                }
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={signUpForm.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(event) =>
                  setSignUpForm({
                    ...signUpForm,
                    firstname: event.target.value,
                  })
                }
                variant="outlined"
                required
                fullWidth
                name="First Name"
                label="First Name"
                type="First Name"
                id="First Name"
                autoComplete="First Name"
                value={signUpForm.firstname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(event) =>
                  setSignUpForm({ ...signUpForm, lastname: event.target.value })
                }
                variant="outlined"
                required
                fullWidth
                name="Last Name"
                label="Last Name"
                type="Last Name"
                id="Last Name"
                autoComplete="Last Name"
                value={signUpForm.lastname}
              />
            </Grid>

            {/* <Grid item xs={12}>
              <TextField
                onChange={(event) =>
                  setSignUpForm({ ...signUpForm, role: event.target.value })
                }
                variant="outlined"
                required
                fullWidth
                name="Role"
                label="Role"
                type="role"
                id="role"
                autoComplete="role"
                value={signUpForm.role}
              />
            </Grid> */}
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                <RouteLink to="/">Already have an account? Sign in</RouteLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
