import React from 'react';
import { Grid, Button, useTheme, Typography } from '@material-ui/core';
import ButtonArrow from '../ui/ButtonArrow';
import animationData from '../../animations/landinganimation/data.js';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em'
    }
  },
  estimateBtn: {
    ...theme.typography.estimateBtn,
    backgroundColor: theme.palette.common.orange,
    borderRadius: '50em',
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  learnBtnHero: {
    ...theme.typography.learnButton,
    fontSize: '.9rem',
    height: 45,
    width: 145
  }
}));
const HeroBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Grid item>
      <Grid container alignItems='center' justify='flex-end' direction='row'>
        <Grid sm item className={classes.heroTextContainer}>
          <Typography align='center' variant='h2'>
            Bringing West Coast Technology <br />
            to the Midwest
          </Typography>
          <Grid container justify='center' style={{ marginTop: '1em' }}>
            <Grid item>
              <Button
                component={Link}
                to='/estimate'
                className={classes.estimateBtn}
                variant='contained'>
                Free Estimate
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to='/revolution'
                variant='outlined'
                className={classes.learnBtnHero}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item className={classes.animation}>
          <Lottie options={defaultOptions} height='100%' width='100%' />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroBlock;
