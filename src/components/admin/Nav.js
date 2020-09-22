import React, { useState } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
// import Modal from "@material-ui/core/Modal";
import FormGroup from "@material-ui/core/FormGroup";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "@reach/router";
import { Auth } from "aws-amplify";
import TextField from "@material-ui/core/TextField";
// import Login from "../Login";
// import SignUp from "../SignUp";

//import LogIn from "../../../components/Login";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: "black",
    // opacity: 0.5,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textDecorationColor: "white",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const [auth] = React.useState(true);
  const [anchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [opens, setOpen] = React.useState(false);
  const [signedInUser, setSignedInUser] = useState(undefined);
  const [signInForm, setSignedInForm] = useState({
    username: "",
    password: "",
  });

  async function signOut() {
    try {
      await Auth.signOut({ global: true }).then(() => {
        window.location = "/admin";
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function signIn() {
    try {
      console.log(signInForm);
      const user = await Auth.signIn(signInForm.username, signInForm.password);
      setSignedInUser(user);
      console.log(await Auth.currentAuthenticatedUser());
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(() => {
  //   (async () => console.log(await Auth.currentAuthenticatedUser()))();
  // }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //const [modalStyle] = React.useState(getModalStyle);
  const [signin, setSignInOpen] = React.useState(false);
  const [login, setLogInOpen] = React.useState(false);

  const signUpOpen = () => {
    setSignInOpen(true);
  };

  const logInOpen = () => {
    setLogInOpen(true);
  };

  const handleCloses = () => {
    setSignInOpen(false);
    setLogInOpen(false);
  };

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className={classes.root}>
      {signedInUser ? (
        <Button color="inherit" onClick={signOut}>
          Logout
        </Button>
      ) : (
        <div>
          <form>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e) =>
                setSignedInForm({
                  ...signInForm,
                  username: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) =>
                setSignedInForm({
                  ...signInForm,
                  password: e.target.value,
                })
              }
            />
            <Button variant="contained" color="secondary" onClick={signIn}>
              Sign In
            </Button>
          </form>
        </div>
      )}
      <FormGroup>
        {/* <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />*/}
      </FormGroup>
      <AppBar position="static" backgroundColor="black">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={opens}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>

            <List>
              <ListItem>
                <Link to="products">Products</Link>
              </ListItem>

              <Divider />

              {/* <ListItem>
                <Link to="productdetail">Product Detail</Link>
              </ListItem>

              <Divider />

              <ListItem>
                <Link to="newproduct">New Product</Link>
              </ListItem> */}

              <Divider />

              <ListItem>
                <Link to="orders">Orders</Link>
              </ListItem>

              <Divider />

              <ListItem>
                <Link to="orderdetail">Order Detail</Link>
              </ListItem>
              <Divider />

              <ListItem>
                <Link to="categories">Categories</Link>
              </ListItem>

              <Divider />

              <ListItem>
                <Link to="/admin">Home</Link>
              </ListItem>
            </List>
            <Divider />
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            E-Commerce
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {auth && (
            <div>
              {/* <Modal
                open={login}
                onClose={handleCloses}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Login />
              </Modal>
              <Button color="inherit" onClick={signUpOpen}>
                Sign Up
              </Button>
              <Modal
                open={signin}
                onClose={handleCloses}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <SignUp />
              </Modal> */}
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Login In</MenuItem>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu> */}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
