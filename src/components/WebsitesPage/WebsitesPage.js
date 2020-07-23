import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Hidden,
  IconButton,
  Typography
} from '@material-ui/core';
import backarrow from '../../assets/backArrow.svg';
import forwardarrow from '../../assets/forwardArrow.svg';
import analytics from '../../assets/analytics.svg';
import seo from '../../assets/seo.svg';
import outreach from '../../assets/outreach.svg';
import ecommerce from '../../assets/ecommerce.svg';
import { Link } from 'react-router-dom';
import CTA from '../ui/CTA';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: '.5em'
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
  paragraph: {
    maxWidth: '30em'
  }
}));

const WebsitesPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
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
            <IconButton component={Link} to='/mobileapps'>
              <img src={backarrow} alt='back Arrow' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'justify' : undefined} variant='h2'>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              Having a website is a necessity in today's business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you're the best at it.
            </Typography>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drivers growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton component={Link} to='/services'>
              <img src={forwardarrow} alt='Forward Arrow' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        style={{ marginTop: '15em' }}
        alignItems='center'>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{ marginLeft: '-2.75em' }}
                alt='analytics icon'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraph}>
          <Typography variant='body1'>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify='flex-end'
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        style={{ marginBottom: '15em', marginTop: '15em' }}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt='ecommerce icon' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraph}>
          <Typography variant='body1' paragraph>
            It's no secret that people like to shop online.
          </Typography>
          <Typography variant='body1' paragraph>
            In 2017 over $2.3 trillion was spent in e-commerce, and it's time
            for your slice of that pie
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={outreach}
                style={{ marginLeft: '-2.75em' }}
                alt='outreach icon'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraph}>
          <Typography variant='body1'>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what's right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        justify='flex-end'
        alignItems='center'
        style={{ marginBottom: '15em', marginTop: '15em' }}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Search Engine
                <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt='seo icon' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraph}>
          <Typography variant='body1' paragraph>
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography variant='body1' paragraph>
            If you're like us, probably never.
          </Typography>
          <Typography variant='body1' paragraph>
            Customers don't go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
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

export default WebsitesPage;
