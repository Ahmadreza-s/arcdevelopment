import React from 'react';
import Lottie from 'react-lottie';
import { Grid, useMediaQuery, Typography, Hidden } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import backarrow from '../../assets/backArrow.svg';
import forwardarrow from '../../assets/forwardArrow.svg';
import { Link } from 'react-router-dom';
import lightbulb from '../../assets/bulb.svg';
import cash from '../../assets/cash.svg';
import stowpatch from '../../assets/stopwatch.svg';
import documentAnimation from '../../animations/documentsAnimation/data';
import scaleAnimation from '../../animations/scaleAnimation/data.json';
import automationAnimation from '../../animations/automationAnimation/data.json';
import uxAnimation from '../../animations/uxAnimation/data';
import roots from '../../assets/root.svg';
import CTA from '../ui/CTA';

const Card = ({ icon, text, alt, matchesSM }) => (
  <Grid
    item
    container
    direction='column'
    md
    alignItems='center'
    style={{
      maxWidth: '40em',
      marginTop: matchesSM ? '5em' : 0,
      marginBottom: matchesSM ? '5em' : 0
    }}>
    <Grid item>
      <Typography variant='h4'>{text}</Typography>
    </Grid>
    <Grid item>
      <img src={icon} alt={alt} />
    </Grid>
  </Grid>
);
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
  itemContainer: {
    maxWidth: '40em'
  }
}));

const CustomSoftwarePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const options = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const documentOptions = {
    ...options,
    animationData: documentAnimation
  };
  const scaleOptions = {
    ...options,
    animationData: scaleAnimation
  };
  const automationOptions = {
    ...options,
    animationData: automationAnimation
  };
  const uxOptions = {
    ...options,
    animationData: uxAnimation
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
            <IconButton component={Link} to='/services'>
              <img src={backarrow} alt='back Arrow' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'justify' : undefined} variant='h2'>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              align={matchesMD ? 'justify' : undefined}
              variant='body1'
              paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              variant='body1'
              paragraph
              align={matchesMD ? 'justify' : undefined}>
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton component={Link} to='/mobileapps'>
              <img src={forwardarrow} alt='Forward Arrow' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction='row'
        justify='center'
        style={{ marginTop: '15em', marginBottom: '20em' }}>
        <Card text='Save Energy' icon={lightbulb} alt='lightbulb icon' />
        <Card
          text='Save Time'
          icon={stowpatch}
          alt='stopwatch icon'
          matchesSM={matchesSM}
        />
        <Card text='Save Money' icon={cash} alt='cash icon' />
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'center' : null}
        direction={matchesMD ? 'column' : 'row'}
        justify='space-between'>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : undefined}>
                Reduce Errors, Reduce Waste, Reduce Costs.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : undefined}>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : undefined}>
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          className={classes.itemContainer}
          md>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : 'right'}>
                Whether you're a large brand, just getting started, or taking
                off right now, out application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        style={{ marginTop: '20em', marginBottom: '20em' }}>
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={roots}
              alt='tree with roots'
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant='h4' align='center' gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography
              variant='body1'
              align={matchesSM ? 'justify' : 'center'}
              paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography
              variant='body1'
              align={matchesSM ? 'justify' : 'center'}
              paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'center' : null}
        direction={matchesMD ? 'column' : 'row'}
        justify='space-between'>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
          style={{ marginBottom: matchesMD ? '15em' : 0 }}>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : undefined}>
                Why waste time when you don't have to?
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : undefined}>
                We can Help you identify processes with time or event based
                actions which you can now be automated
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : undefined}>
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          className={classes.itemContainer}
          md>
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : 'right'}>
                A good design that isn't usable isn't a good design.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : 'right'}>
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesSM ? 'justify' : 'right'}>
                By prioritizing users and the real ways they interact with
                technology we're able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
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

export default CustomSoftwarePage;
