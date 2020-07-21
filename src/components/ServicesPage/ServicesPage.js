import React from 'react';
import { Grid, useMediaQuery, Typography } from '@material-ui/core';
import Block from '../LandingPage/Block';
import { useTheme } from '@material-ui/core';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';

const ServicesPage = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em'
        }}>
        <Typography
          variant='h2'
          align={matchesSM ? 'center' : undefined}
          gutterBottom>
          Services
        </Typography>
      </Grid>
      {/*-----Mobile App Block----- */}
      <Grid item style={{ marginTop: matchesSM ? '-9em' : '-5em' }}>
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

      {/*-----Website Block----- */}
      <Grid item style={{ marginBottom: '10em' }}>
        <Block
          link='/websites'
          isRight={true}
          title='Website Development'
          subtitle1='Reach More. Discover More. Sell More.'
          subtitle2='Optimized for search Engines, built for speed.'
          image={websiteIcon}
          alt='Website Icon'
        />
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
