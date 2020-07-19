import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';
import HeroBlock from './HeroBlock.js';
import Block from './Block';
import RevolutionBlock from './RevolutionBlock';
import InformationBlock from './InformationBlock';
import CTA from '../ui/CTA';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em'
    }
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <HeroBlock />
      {/*-----Services Block----- */}
      <Grid item>
        <Block
          link='/customsoftware'
          isRight={false}
          title='Custom Software Development'
          subtitle1='Save Energy. Save Time. Save Money.'
          subtitle2={
            <>
              Complete digital solutions, from investigations to{' '}
              <span
                style={{
                  fontFamily: 'Pacifico',
                  color: theme.palette.common.orange
                }}>
                celebration
              </span>
            </>
          }
          image={customSoftwareIcon}
          alt='Custom Software Icon'
        />
      </Grid>
      {/*-----Mobile App Block----- */}
      <Grid item>
        <Block
          link='/mobileapps'
          isRight={true}
          title='Mobile App Development'
          subtitle1='Extend Functionality. Extend Access. Increase Engagement.'
          subtitle2={
            <>
              Integrate Your Web experience or create a standalone app
              {matchesSM ? ' ' : <br />}with either mobile platform.
            </>
          }
          image={mobileAppIcon}
          alt='Mobile App Icon'
        />
      </Grid>
      {/*-----Website Block----- */}
      <Grid item>
        <Block
          link='/websites'
          isRight={false}
          title='Website Development'
          subtitle1='Reach More. Discover More. Sell More.'
          subtitle2='Optimized for search Engines, built for speed.'
          image={websiteIcon}
          alt='Website Icon'
        />
      </Grid>
      <Grid item>
        <RevolutionBlock />
      </Grid>
      <Grid item>
        <InformationBlock />
      </Grid>
      <Grid item>
        <CTA />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
