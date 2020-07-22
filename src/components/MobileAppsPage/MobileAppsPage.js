import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  useMediaQuery,
  Hidden,
  IconButton
} from '@material-ui/core';
import backarrow from '../../assets/backArrow.svg';
import forwardarrow from '../../assets/forwardArrow.svg';
import { Link } from 'react-router-dom';
import integrationAnimation from '../../animations/integrationAnimation/data.json';
import swiss from '../../assets/swissKnife.svg';
import access from '../../assets/extendAccess.svg';
import engagement from '../../assets/increaseEngagement.svg';
import CTA from '../ui/CTA';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em'
  },
  mainContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
      paddingTop: '1em'
    }
  },
  arrowContainer: {
    marginTop: '.5em'
  },
  itemContainer: {
    maxWidth: '40em'
  }
}));

const MobileAppsPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : null}>
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
            <IconButton component={Link} to='/customsoftware'>
              <img src={backarrow} alt='back Arrow' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'justify' : undefined} variant='h2'>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton component={Link} to='/websites'>
              <img src={forwardarrow} alt='Forward Arrow' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        style={{ marginTop: '15em', marginBottom: '15em' }}
        direction={matchesMD ? 'column' : 'row'}>
        <Grid
          item
          container
          direction='column'
          className={classes.itemContainer}
          md>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              Our technologies enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid
          item
          container
          direction='column'
          className={classes.itemContainer}
          md>
          <Grid item>
            <Typography
              align={matchesMD ? 'justify' : 'right'}
              variant='h4'
              gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'justify' : 'right'}
              variant='body1'
              paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets - all at the same time
            </Typography>
            <Typography
              align={matchesMD ? 'justify' : 'right'}
              variant='body1'
              paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{ marginBottom: '15em' }}
        direction={matchesMD ? 'column' : 'row'}>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          md
          style={{
            marginTop: matchesMD ? '10em' : 0,
            marginBottom: matchesMD ? '10em' : 0
          }}>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt='swiss army knife' />
          </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt='extend access'
              style={{ maxWidth: matchesXS ? '20em' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt='increase engagement' />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          marginTop: '5em',
          marginLeft: matchesSM ? '-1.5em' : '-5em',
          marginRight: matchesSM ? '-1.5em' : '-5em'
        }}>
        <CTA />
      </Grid>
    </Grid>
  );
};

export default MobileAppsPage;
