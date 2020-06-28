import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/logo.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3em",
    },
    logo: {
      height: "8em",
    },
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
    },
    button: {
      ...theme.typography.estimateBtn,
      borderRadius: 50,
      marginLeft: 50,
      marginRight: 25,
      height: 45,
    },
  };
});

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger({ threshold: 20 });

  return (
    <Slide appear={false} direction="down" timeout={500} in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => {
  const location = useLocation();

  const classes = useStyles();

  const [value, setValue] = useState(0);

  const changeHandler = (e, v) => setValue(v);

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/":
        setValue(0);
        break;

      case "/services":
        setValue(1);
        break;

      case "/revolution":
        setValue(2);
        break;

      case "/about":
        setValue(3);
        break;

      case "/contact":
        setValue(4);
        break;

      case "/estimate":
        setValue(5);
        break;

      default:
        setValue(0);
    }
  }, [location]);

  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoContainer}
            >
              <img alt="company logo" src={logo} className={classes.logo} />
            </Button>
            <Tabs
              className={classes.tabContainer}
              value={value}
              onChange={changeHandler}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
