import React from "react";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Admin from "./Admin";

export default function AdminSignedOut() {
  const [signedInUser, setSignedInUser] = useState(undefined);
  const [signInForm, setSignedInForm] = useState({
    username: "",
    password: "",
  });
  async function signOut() {
    try {
      await Auth.signOut({ global: true }).then(() => {
        window.location = "/signedout";
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
  return (
    <div>
      {signedInUser ? (
        // <Button color="inherit" onClick={signOut}>
        //   Logout
        // </Button>
        <Admin />
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
    </div>
  );
}
