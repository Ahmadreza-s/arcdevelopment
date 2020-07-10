import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../../assets/Footer Adornment.svg';
import { Grid, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import instagram from '../../../assets/instagram.svg';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '.75rem',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  },
  socialIcon: {
    width: '4em',
    height: '4em',
    [theme.breakpoints.down('xs')]: {
      width: '2.5em',
      height: '2.5em'
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '.6em'
    }
  }
}));

const links = [
  [
    {
      title: 'Home',
      url: '/'
    }
  ],
  [
    {
      title: 'Services',
      url: '/services'
    },
    {
      title: 'Custom Software Development',
      url: '/customsoftware'
    },
    {
      title: 'Mobile App Development',
      url: '/mobileapps'
    },
    {
      title: 'Website Development',
      url: '/websites'
    }
  ],
  [
    {
      title: 'The Revolution',
      url: '/revolution'
    },
    {
      title: 'Vision',
      url: '/revolution'
    },
    {
      title: 'Technology',
      url: '/revolution'
    },
    {
      title: 'Process',
      url: '/revolution'
    }
  ],
  [
    {
      title: 'About Us',
      url: '/about'
    },
    {
      title: 'History',
      url: '/about'
    },
    {
      title: 'Team',
      url: '/about'
    }
  ],
  [
    {
      title: 'Contact Us',
      url: '/contact'
    }
  ]
];

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          {links.map((link) => (
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                {link.map((l) => (
                  <Grid
                    item
                    component={Link}
                    to={l.url}
                    className={classes.link}>
                    {l.title}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <img alt='' className={classes.adornment} src={footerAdornment} />
      <Grid
        container
        justify='flex-end'
        spacing={2}
        className={classes.socialContainer}>
        <Grid
          item
          component='a'
          href='https://fb.com'
          rel='noopener noreferrer'
          target='_blank'>
          <img src={facebook} alt='Facebook' className={classes.socialIcon} />
        </Grid>
        <Grid
          item
          component='a'
          href='https://twitter.com'
          rel='noopener noreferrer'
          target='_blank'>
          <img src={twitter} alt='Twitter' className={classes.socialIcon} />
        </Grid>
        <Grid
          item
          component='a'
          href='https://instagram.com'
          rel='noopener noreferrer'
          target='_blank'>
          <img src={instagram} alt='Instagram' className={classes.socialIcon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
