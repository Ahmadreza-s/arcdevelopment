import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/styles';
import logo from '../../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { HeaderMenu } from './HeaderMenu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import HeaderDrawer from './HeaderDrawer';

const useStyles = makeStyles((theme) => {
  return {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3em',
      [theme.breakpoints.down('md')]: {
        height: '2em'
      },
      [theme.breakpoints.down('xs')]: {
        height: '1.25em'
      }
    },
    logo: {
      height: '8em',
      [theme.breakpoints.down('md')]: {
        height: '7em'
      },
      [theme.breakpoints.down('xs')]: {
        height: '5.5em'
      }
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    tabContainer: {
      marginLeft: 'auto'
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px'
    },
    button: {
      ...theme.typography.estimateBtn,
      borderRadius: 50,
      marginLeft: 50,
      marginRight: 25,
      height: 45,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light
      }
    },
    appBar: {
      zIndex: theme.zIndex.modal + 1
    }
  };
});

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger({ threshold: 20 });

  return (
    <Slide appear={false} direction='down' timeout={500} in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const location = useLocation();

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [serviceMenuSelectedIndex, setServiceMenuSelectedIndex] = useState(-1);

  const hoverMenuHandler = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const changeHandler = (e, index) => setActiveTabIndex(index);

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/':
        setActiveTabIndex(0);
        setServiceMenuSelectedIndex(-1);
        break;

      case '/customsoftware':
        setActiveTabIndex(1);
        setServiceMenuSelectedIndex(1);
        break;

      case '/mobileapps':
        setActiveTabIndex(1);
        setServiceMenuSelectedIndex(2);
        break;

      case '/websites':
        setActiveTabIndex(1);
        setServiceMenuSelectedIndex(3);
        break;

      case '/services':
        setActiveTabIndex(1);
        setServiceMenuSelectedIndex(0);
        break;

      case '/revolution':
        setActiveTabIndex(2);
        setServiceMenuSelectedIndex(-1);
        break;

      case '/about':
        setActiveTabIndex(3);
        setServiceMenuSelectedIndex(-1);
        break;

      case '/contact':
        setActiveTabIndex(4);
        setServiceMenuSelectedIndex(-1);
        break;

      case '/estimate':
        setActiveTabIndex(5);
        setServiceMenuSelectedIndex(-1);
        break;

      default:
        setActiveTabIndex(0);
        setServiceMenuSelectedIndex(-1);
    }
  }, [location]);

  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        value={activeTabIndex}
        onChange={changeHandler}>
        <Tab className={classes.tab} component={Link} to='/' label='Home' />
        <Tab
          className={classes.tab}
          component={Link}
          onMouseOver={hoverMenuHandler}
          to='/services'
          label='Services'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/revolution'
          label='The Revolution'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/about'
          label='About Us'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/contact'
          label='Contact Us'
        />
      </Tabs>
      <Button
        component={Link}
        to='/estimate'
        color='secondary'
        variant='contained'
        className={classes.button}>
        Free Estimate
      </Button>
      <HeaderMenu
        anchorEl={anchorEl}
        open={openMenu}
        handleClose={closeMenuHandler}
        handleSelected={(index) => setServiceMenuSelectedIndex(index)}
        selectedIndex={serviceMenuSelectedIndex}
      />
    </>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to='/'
              className={classes.logoContainer}>
              <img alt='company logo' src={logo} className={classes.logo} />
            </Button>
            {matches ? (
              tabs
            ) : (
              <HeaderDrawer
                tlbrMrgin={classes.toolbarMargin}
                activeIndex={activeTabIndex}
              />
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
