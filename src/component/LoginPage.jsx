import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loader from './Loader'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginApi } from '../redux/action/LoginAction'

const Login = ({ handleChange }) => {
  const dispatch = useDispatch()
  const Loading = useSelector((state) => state.LoginReducer.loading)

  const paperStyle = {
    padding: 20,
    height: '73vh',
    width: 300,
    margin: '0 auto',
  }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('please enter valid email').required('Required'),
    password: Yup.string().required('Required'),
  })

  const onSubmit = (values, props) => {
    console.log(values)
    dispatch(userLoginApi(values))
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }
  //changes
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {Loading && <Loader />}

              {/* {error && <div className="alert alert-danger">{error}</div>} */}
              <Field
                as={TextField}
                label="email"
                name="email"
                placeholder="Enter email"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              {/* <Field as={FormControlLabel}
                                    name='remember'
                                    control={
                                        <Checkbox
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                /> */}
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                style={btnstyle}
                fullWidth
              >
                {props.isSubmitting ? 'Loading' : 'Sign in'}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography component={'span'}>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography component={'span'}>
          {' '}
          Do you have an account ?
          <Link href="#" onClick={() => handleChange('event', 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login
