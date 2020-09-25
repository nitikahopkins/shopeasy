import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SetUsername from "../components/signup/SetUsername";
import ConfirmSignUp from "../components/signup/ConfirmSignUp";
import { Auth } from "aws-amplify";
import { navigate } from "@reach/router";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Create Username and Password", "Confirm Sign Up"];
}
function getStepContent(stepIndex, signUpForm, setSignUpForm) {
  switch (stepIndex) {
    case 0:
      return (
        <SetUsername signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
      );
    case 1:
      return (
        <ConfirmSignUp signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
      );
    default:
      return "Unknown stepIndex";
  }
}
export default function SignUp({ handleCloseSignUp, logInOpen }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [signUpForm, setSignUpForm] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmationCode: "",
  });
  console.log(signUpForm);

  const [signUpUser, setSignUpUser] = React.useState(undefined);
  console.log("signed up user", signUpUser);

  function renderButton() {
    if (activeStep === steps.length - 1) {
      return (
        <Button variant="contained" color="primary" onClick={handleConfirmUser}>
          Confirm
        </Button>
      );
    } else {
      return (
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      );
    }
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleCreateUser = () => {
    try {
      console.log(signUpForm);
      async function signUp() {
        const user = await Auth.signUp({
          // firstname: signUpForm.firstname,
          // lastname: signUpForm.lastname,
          username: signUpForm.email,
          password: signUpForm.password,
          attributes: {
            email: signUpForm.email,
          },
        });
        setSignUpUser(user);
      }
      signUp();
      handleNext();
    } catch (error) {
      console.log(error);
    }
  };

  async function handleConfirmUser() {
    function createUser() {
      return axios
        .post("localhost:4000/users", {
          firstName: signUpForm.firstname,
          lastName: signUpForm.lastname,
          email: signUpForm.email,
          password: signUpForm.password,
        })
        .catch((error) => console.log("error", error));
    }
    //   console.log("upload to mysql");
    //   return axios({
    //     method: "post",
    //     url: "//http://localhost:4000/users",
    //     data: {
    //       firstName: signUpForm.firstname,
    //       lastName: signUpForm.lastname,
    //       email: signUpForm.email,
    //       password: signUpForm.password,
    //     },
    //     headers: { "Content-Type": "application/json" },
    //   });
    // }
    try {
      const response = await Auth.confirmSignUp(
        signUpForm.email,
        signUpForm.confirmationCode
      );
      // prompt(response);
      if (response === "SUCCESS") {
        createUser()
          .then(() => {
            handleCloseSignUp();
            logInOpen();
          })
          .catch((error) => console.log(error));
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={classes.paper}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>
          <Typography className={classes.instructions}>
            {getStepContent(activeStep, signUpForm, setSignUpForm)}{" "}
          </Typography>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>
          {activeStep === steps.length - 2 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateUser}
            >
              Sign Up
            </Button>
          ) : (
            renderButton()
          )}
        </div>
      </div>
    </div>
  );
}
