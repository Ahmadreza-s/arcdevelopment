import React, { useState } from 'react';
import {
  SwipeableDrawer,
  IconButton,
  makeStyles,
  ListItem,
  List,
  ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import links from '../../../links';

const useStyles = makeStyles((theme) => {
  return {
    drawerIconContainer: {
      marginLeft: 'auto',
      color: 'white',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    drawerIcon: {
      height: 50,
      width: 50
    },
    drawer: {
      backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white'
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
      opacity: 1
    }
  };
});

const HeaderDrawer = ({ activeIndex, tlbrMrgin }) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const ListItemLink = (props) =>
    React.useMemo(
      () => (
        <ListItem
          className={classes.drawerItem}
          onClick={() => setOpenDrawer(false)}
          divider
          button
          component={Link}
          {...props}
        />
      ),
      [props]
    );

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={tlbrMrgin} />
        <List disablePadding component='nav'>
          {links.map((link, index) => (
            <ListItemLink
              key={link.title}
              selected={activeIndex === index}
              classes={{ selected: classes.drawerItemSelected }}
              to={link.url}
              className={
                links.length - 1 !== index
                  ? classes.drawerItem
                  : [classes.drawerItem, classes.drawerItemEstimate].join(' ')
              }
            >
              <ListItemText disableTypography>{link.title}</ListItemText>
            </ListItemLink>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer((prev) => !prev)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
};

export default HeaderDrawer;
