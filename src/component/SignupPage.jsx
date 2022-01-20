import React from 'react'
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'

const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: '0 auto' }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 10 }
  const initialValues = {
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmpassword: '',
  }
  // const validationSchema = Yup.object().shape({
  //     name: Yup.string().name('please enter name').required("Required"),
  //     email: Yup.string().email('please enter valid email').required("Required"),
  //     phonenumber: Yup.string().name('please enter phone number').required("Required"),
  //     password: Yup.string().required("Required"),
  //     confirmpassword: Yup.string().required("Required"),
  // })
  const onSubmit = (values, props) => {
    console.log(values)
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                required
                label="Name"
                placeholder="Enter your name"
                name="name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                required
                label="Email"
                placeholder="Enter your email"
                name="email"
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                fullWidth
                required
                label="Phone Number"
                placeholder="Enter your phone number"
                name="phonenumber"
                helperText={<ErrorMessage name="phonenumber" />}
              />
              <Field
                as={TextField}
                fullWidth
                required
                label="Password"
                placeholder="Enter your password"
                name="password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                required
                label="Confirm Password"
                placeholder="Confirm your password"
                name="confirmpassword"
                helperText={<ErrorMessage name="confirmpassword" />}
              />

              <FormControl component="fieldset" style={marginTop}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  style={{ display: 'initial' }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.isSubmitting}
                fullWidth
              >
                {props.isSubmitting ? 'Loading' : 'Sign in'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}

export default Signup
