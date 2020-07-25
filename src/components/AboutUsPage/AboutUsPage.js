import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import history from '../../assets/history.svg';
import CTA from '../ui/CTA';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  }
}));

const AboutUsPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}>
        <Typography
          variant='h4'
          align='center'
          className={classes.missionStatement}>
          Whether it be person, business to consumer, or an individual to their
          interests, technology is meant to bring us closer to what we care
          about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify='space-around'
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: '5em', marginBottom: '5em' }}>
        <Grid item>
          <Grid
            item
            container
            direction='column'
            lg
            style={{ maxWidth: '35em' }}>
            <Grid item>
              <Typography
                variant='h4'
                align={matchesMD ? 'center' : undefined}
                gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}>
                We're the new kid on the block.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph>
                Founded in 2020, We're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph>
                It all started with one question: Why aren't all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent Developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically , and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                paragraph>
                All this change can be a let to keep up with, and that's where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify='center' lg>
            <img
              src={history}
              alt='history icon'
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          marginTop: '2.5em'
        }}>
        <CTA />
      </Grid>
    </Grid>
  );
};

export default AboutUsPage;
