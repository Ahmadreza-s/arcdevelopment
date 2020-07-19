import React from 'react';
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
  useTheme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonArrow from '../ui/ButtonArrow';
import revolutionBack from '../../assets/repeatingBackground.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  learnBtnHero: {
    ...theme.typography.learnButton,
    fontSize: '.9rem',
    height: 45,
    width: 145
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBack})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingRight: 0,
      paddingLeft: 0,
      borderRadius: 0
    }
  }
}));

const RevolutionBlock = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      style={{ height: '60em', marginTop: '12em' }}>
      <Card className={classes.revolutionCard}>
        <CardContent>
          <Grid container direction='column' style={{ textAlign: 'center' }}>
            <Grid item>
              <Typography variant='h3' gutterBottom>
                The Revolution
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' gutterBottom>
                Visionary insights coupled with cutting-edge technology is a
                recipe for revolution.
              </Typography>
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
        </CardContent>
      </Card>
      <div className={classes.revolutionBackground} />
    </Grid>
  );
};

export default RevolutionBlock;
