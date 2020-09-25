import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState("female");

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Question 1</Typography>
          <Typography className={classes.secondaryHeading}>I am a</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FormControl component="fieldset">
                {/* <FormLabel component="legend">I am a</FormLabel> */}
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleOnChange}
                >
                  <FormControlLabel
                    value="Man"
                    control={<Radio />}
                    label="Man"
                  />
                  <FormControlLabel
                    value="Woman"
                    control={<Radio />}
                    label="Woman"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Question 2</Typography>
          <Typography className={classes.secondaryHeading}>
            The ocassion is
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FormControl component="fieldset">
                {/* <FormLabel component="legend">The ocassion is </FormLabel> */}
              </FormControl>
              <div id="emotion">
                <input type="radio" name="emotion" id="sad" />
                <label for="sad">
                  <img src="https://img.icons8.com/color/64/000000/wedding-dress.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/cute-clipart/64/000000/confetti.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/plasticine/70/000000/laptop--v2.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/bubbles/80/000000/couple-kiss.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/plasticine/60/000000/espresso-cup.png" />
                </label>
              </div>
            </Paper>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Question 3</Typography>
          <Typography className={classes.secondaryHeading}>
            Weather is going to be
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FormControl component="fieldset">
                {/* <FormLabel component="legend">The ocassion is </FormLabel> */}
              </FormControl>
              <div id="emotion">
                <input type="radio" name="emotion" id="sad" />
                <label for="sad">
                  <img src="https://img.icons8.com/color/64/000000/wedding-dress.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/cute-clipart/64/000000/confetti.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/plasticine/70/000000/laptop--v2.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/bubbles/80/000000/couple-kiss.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/plasticine/60/000000/espresso-cup.png" />
                </label>
              </div>
            </Paper>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Question 4</Typography>
          <Typography className={classes.secondaryHeading}>I wear</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FormControl component="fieldset">
                {/* <FormLabel component="legend">The ocassion is </FormLabel> */}
              </FormControl>
              <div id="emotion">
                <input type="radio" name="emotion" id="sad" />
                <label for="sad">
                  <img src="https://img.icons8.com/color/64/000000/wedding-dress.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/cute-clipart/64/000000/confetti.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/plasticine/70/000000/laptop--v2.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/bubbles/80/000000/couple-kiss.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/plasticine/60/000000/espresso-cup.png" />
                </label>
              </div>
            </Paper>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Question 5</Typography>
          <Typography className={classes.secondaryHeading}>
            My preffered color is
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FormControl component="fieldset">
                {/* <FormLabel component="legend">The ocassion is </FormLabel> */}
              </FormControl>
              <div id="emotion">
                <input type="radio" name="emotion" id="sad" />
                <label for="sad">
                  <img src="https://img.icons8.com/color/64/000000/wedding-dress.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/cute-clipart/64/000000/confetti.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/plasticine/70/000000/laptop--v2.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/bubbles/80/000000/couple-kiss.png" />
                </label>
                <input type="radio" name="emotion" id="happy" />
                <label for="happy">
                  <img src="https://img.icons8.com/plasticine/60/000000/espresso-cup.png" />
                </label>
              </div>
            </Paper>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: 10, marginLeft: 600 }}
      >
        Match Me!
      </Button>
    </div>
  );
}
