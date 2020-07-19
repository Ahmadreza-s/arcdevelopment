import React from 'react';
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import ButtonArrow from '../ui/ButtonArrow';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  learnBtn: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  }
}));
const Block = ({ isRight, title, subtitle1, subtitle2, image, alt, link }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      direction='row'
      justify={matchesSM ? 'center' : isRight ? 'flex-end' : null}
      className={classes.serviceContainer}>
      <Grid
        item
        style={{
          marginLeft: isRight ? null : matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : null
        }}>
        <Typography variant='h4'>{title}</Typography>
        <Typography variant='subtitle1' style={{ marginBottom: '1em' }}>
          {subtitle1}
        </Typography>
        <Typography variant='subtitle1'>{subtitle2}</Typography>
        <Button
          component={Link}
          to={link}
          variant='outlined'
          className={classes.learnBtn}>
          <span style={{ marginRight: 10 }}>Learn More</span>
          <ButtonArrow
            width={10}
            height={10}
            fill={theme.palette.common.blue}
          />
        </Button>
      </Grid>
      <Grid
        item
        style={{ marginRight: !isRight ? null : matchesSM ? 0 : '5em' }}>
        <img className={classes.icon} alt={alt} src={image} />
      </Grid>
    </Grid>
  );
};

export default Block;
