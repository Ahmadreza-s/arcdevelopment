import React from 'react';
import { Grid, Typography, Button, useMediaQuery } from '@material-ui/core';
import infoBackground from '../../assets/infoBackground.svg';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ButtonArrow from '../ui/ButtonArrow';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  learnBtnHero: {
    ...theme.typography.learnButton,
    color: 'white',
    borderColor: 'white',
    fontSize: '.7rem',
    height: 35,
    padding: 5
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  gridContainer: {
    justifyContent: 'space-between',
    position: 'absolute',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
}));
const InformationBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Grid
      container
      style={{ height: matchesXS ? '40em' : '60em' }}
      direction='row'
      alignItems='center'>
      <Grid className={classes.gridContainer} item container>
        <Grid item style={{ marginLeft: matchesXS ? '0' : '5em' }}>
          <Grid container direction='column'>
            <Typography variant='h2' style={{ color: 'white' }}>
              About Us
            </Typography>
            <Typography variant='subtitle2'>Let's get personal.</Typography>
            <Button
              component={Link}
              to='/about'
              variant='outlined'
              className={classes.learnBtnHero}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill='white' />
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesXS ? '0' : '5em',
            marginTop: matchesXS ? '5em' : null
          }}>
          <Grid container direction='column'>
            <Typography variant='h2' style={{ color: 'white' }}>
              Contact Us
            </Typography>
            <Typography variant='subtitle2'>Say hello!</Typography>
            <Button
              component={Link}
              to='/contact'
              variant='outlined'
              className={classes.learnBtnHero}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill='white' />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <div className={classes.infoBackground} />
    </Grid>
  );
};

export default InformationBlock;
