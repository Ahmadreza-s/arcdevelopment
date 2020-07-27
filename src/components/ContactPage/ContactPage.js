import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Dialog
} from '@material-ui/core';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';
import airplane from '../../assets/send.svg';
import ButtonArrow from '../ui/ButtonArrow';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      height: '40em',
      paddingBottom: '5em'
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '2em',
      height: '30em'
    }
  },
  estimateBtn: {
    ...theme.typography.estimateBtn,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.secondary.main,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginLeft: 0,
      marginTop: '2em',
      height: 60,
      width: 180,
      fontSize: '1rem'
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  learnBtn: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '4em',
    borderRadius: 5
  },
  sendBtn: {
    ...theme.typography.estimateBtn,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}));

const ContactPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const onSubmitHandler = (data) => {};
  const { register, handleSubmit, errors } = useForm();

  return (
    <Grid container direction='row'>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        style={{
          marginBottom: matchesSM ? '1em' : matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0
        }}
        lg={4}
        xl={3}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='h2'
                style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='body1'
                style={{ color: theme.palette.common.blue }}>
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt='phone icon'
                  style={{ marginRight: '.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: '1rem'
                  }}>
                  <a
                    href='tel:+989214514155'
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                    +98 921 451 4155
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt='envelope icon'
                  style={{ marginRight: '.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: '1rem'
                  }}>
                  <a
                    href='mailto:ahmadreza.salehvand@outlook.com'
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                    ahmadreza.salehvand@outlook.com
                  </a>
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction='column'
              style={{ maxWidth: '20em' }}>
              <Grid item>
                <TextField
                  label='Name'
                  helperText={errors.name && errors.name.message}
                  name='name'
                  error={!!errors.name}
                  fullWidth
                  inputRef={register({ required: 'Required' })}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  helperText={errors.email && errors.email.message}
                  error={!!errors.email}
                  style={{ marginBottom: '.5em', marginTop: '.5em' }}
                  label='Email'
                  name='email'
                  inputRef={register({
                    required: 'Required',
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'Invalid Email Address'
                    }
                  })}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  helperText={errors.phone && errors.phone.message}
                  error={!!errors.phone}
                  label='Phone'
                  name='phone'
                  inputRef={register({
                    required: 'Required',
                    pattern: {
                      value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                      message: 'Invalid Phone Number'
                    }
                  })}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                name='message'
                helperText={errors.message && errors.message.message}
                error={!!errors.message}
                label='Message'
                fullWidth
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                multiline
                rows={10}
                inputRef={register({ required: 'Required' })}
              />
            </Grid>

            <Grid item container justify='center' style={{ marginTop: '1em' }}>
              <Button
                variant='contained'
                onClick={handleSubmit(onSubmitHandler)}
                className={classes.sendBtn}>
                Send Message
                <img
                  src={airplane}
                  alt='send icon'
                  style={{ marginLeft: '1em' }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
        alignItems='center'
        justify={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}>
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit'
          }}>
          <Grid container direction='row'>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                style={{ fontSize: matchesMD ? '2rem' : undefined }}
                variant='h2'>
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
                Take advantage of the 21st Century.
              </Typography>
              <Grid container justify={matchesMD ? 'center' : null} item>
                <Button
                  component={Link}
                  to='/revolution'
                  variant='outlined'
                  className={classes.learnBtn}>
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ textAlign: matchesMD ? 'center' : 'inherit' }}>
          <Button
            component={Link}
            to='/estimate'
            variant='contained'
            className={classes.estimateBtn}>
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
