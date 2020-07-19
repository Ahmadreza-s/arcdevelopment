import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import ButtonArrow from './ButtonArrow';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  learnBtn: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  estimateBtn: {
    ...theme.typography.estimateBtn,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.secondary.main,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0,
      marginTop: '2em'
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}));
const CTA = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      className={classes.background}
      justify='space-between'
      alignItems='center'>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit'
        }}>
        <Grid container direction='row'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container justify={matchesSM ? 'center' : null} item>
              <Button
                component={Link}
                to='/revolution'
                variant='outlined'
                className={classes.learnBtn}>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ textAlign: matchesSM ? 'center' : 'inherit' }}>
        <Button
          component={Link}
          to='/estimate'
          variant='contained'
          className={classes.estimateBtn}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CTA;
