import React from 'react';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import links from '../../../links';
const useStyles = makeStyles((theme) => ({
  menu: {
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.common.blue,
      color: 'white',
      borderRadius: 0
    }
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  }
}));

export const HeaderMenu = ({
  anchorEl,
  open,
  handleClose,
  handleSelected,
  selectedIndex
}) => {
  const classes = useStyles();

  return (
    <Menu
      anchorEl={anchorEl}
      className={classes.menu}
      MenuListProps={{ onMouseLeave: handleClose }}
      onClose={handleClose}
      open={open}
      elevation={0}
      style={{ zIndex: 1302 }}
      keepMounted
    >
      {links[1].children.map((link, index) => (
        <MenuItem
          key={link.title}
          selected={selectedIndex === index}
          classes={{ root: classes.menuItem }}
          onClick={(e) => {
            handleSelected(index);
            handleClose(e);
          }}
          component={Link}
          to={link.url}
        >
          {link.title}
        </MenuItem>
      ))}
    </Menu>
  );
};
