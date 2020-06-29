import React from 'react';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
const items = [
  {
    title: 'Services',
    link: '/services'
  },
  {
    title: 'Custom Software Development',
    link: '/customsoftware'
  },
  {
    title: 'Mobile App Development',
    link: '/mobileapps'
  },
  {
    title: 'Website Development',
    link: '/websites'
  }
];
export const HeaderMenu = ({
  anchorEl,
  open,
  handleClose,
  handleSelected,
  selectedIndex
}) => {
  const classes = useStyles();

  console.log('selectedIndex', selectedIndex);

  return (
    <Menu
      anchorEl={anchorEl}
      className={classes.menu}
      MenuListProps={{ onMouseLeave: handleClose }}
      onClose={handleClose}
      open={open}
      elevation={0}
    >
      {items.map((item, index) => (
        <MenuItem
          key={item.title}
          selected={selectedIndex === index}
          classes={{ root: classes.menuItem }}
          onClick={(e) => {
            handleSelected(index);
            handleClose(e);
          }}
          component={Link}
          to={item.link}
        >
          {item.title}
        </MenuItem>
      ))}
    </Menu>
  );
};
