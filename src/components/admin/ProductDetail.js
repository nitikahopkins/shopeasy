import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BasicInfo from "./BasicInfo";
import ProductImages from "./ProductImages";
import Pricing from "./Pricing";
import Inventory from "../admin/Inventory";
import Shipping from "../admin/Shipping";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ProductDetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          marginTop: 20,
          backgroundColor: "grey",
          alignSelf: "center",
        }}
      >
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Basic Info" href="/basicinfo" {...a11yProps(0)} />
          <LinkTab
            label="Product Images"
            href="/productimages"
            {...a11yProps(1)}
          />
          <LinkTab label="Pricing" href="/pricing" {...a11yProps(2)} />
          <LinkTab label="Inventory" href="/inventory" {...a11yProps(3)} />
          <LinkTab label="Shipping" href="/shipping" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductImages />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Pricing />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Inventory />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Shipping />
      </TabPanel>
    </div>
  );
}
