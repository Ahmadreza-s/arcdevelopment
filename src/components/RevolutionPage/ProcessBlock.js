import React from 'react';
import { Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  }
}));
const ProcessBlock = ({
  backgroundColor,
  headerColor,
  paragraphColor,
  img,
  alt,
  paragraphs,
  headerText
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      item
      container
      direction={matchesMD ? 'column' : 'row'}
      style={{ backgroundColor: backgroundColor, height: '80em' }}
      className={classes.rowContainer}>
      <Grid
        item
        container
        direction='column'
        lg
        alignItems={matchesMD ? 'center' : undefined}>
        <Grid item>
          <Typography
            variant='h4'
            gutterBottom
            style={{
              marginTop: '5em',
              color: headerColor,
              marginBottom: matchesMD ? '2em' : 0
            }}>
            {headerText}
          </Typography>
        </Grid>
        <Grid item>
          {paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              variant='body1'
              paragraph
              align='justify'
              style={{ color: paragraphColor, maxWidth: '20em' }}>
              {paragraph}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: 'center' }}>
        <img
          src={img}
          alt={alt}
          style={{
            maxWidth: matchesMD ? 200 : 600,
            maxHeight: matchesMD ? '20em' : undefined,
            marginTop: matchesMD ? '5em' : 0
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ProcessBlock;
