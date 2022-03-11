import React from 'react'
import { useDispatch } from 'react-redux'
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
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'
import userRegisterApi from '../redux/action/RegisterAction'
const Signup = (props) => {
  const paperStyle = {
    padding: 20,
    width: 300,
    // height: '80vh',
    margin: '0 auto',
  }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 20 }
  const initialValues = {
    fullname: '',
    phone: '',
    email: '',
    password: '',
    gender: '',
    address: '',
    rolename: props.role,
  }
  const dispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().min(3, "It's too short").required('Required'),
    email: Yup.string().email('Enter valid email').required('Required'),
    gender: Yup.string()
      .oneOf(['male', 'female'], 'Required')
      .required('Required'),
    phone: Yup.number()
      .typeError('Enter valid Phone Number')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password minimum length should be 8')
      .required('Required'),
    address: Yup.string().min(3, "It's too short").required('Required'),
    rolename: Yup.string().min(3, "It's too short").required('Required'),
  })
  const onSubmit = (values, props) => {
    console.log(values)
    dispatch(userRegisterApi(values))
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
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                required
                label="Name"
                placeholder="Enter your name"
                name="fullname"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                required
                label="Phone Number"
                placeholder="Enter your phone number"
                name="phone"
                helperText={<ErrorMessage name="phonenumber" />}
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
                label="Password"
                placeholder="Enter your password"
                name="password"
                type="password"
                helperText={<ErrorMessage name="password" />}
              />

              <Field
                as={TextField}
                fullWidth
                required
                label="Address"
                placeholder="Address"
                name="address"
                helperText={<ErrorMessage name="address" />}
              />
              <Field
                as={TextField}
                fullWidth
                required
                label="Rolename"
                placeholder="Rolename"
                name="rolename"
                helperText={<ErrorMessage name="rolename" />}
              />

              <FormControl component="fieldset" style={marginTop}>
                <FormLabel component="legend">Gender</FormLabel>
                <Field
                  as={RadioGroup}
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
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="gender" />
              </FormHelperText>
              {/* <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
              /> */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.isSubmitting}
                fullWidth
                style={marginTop}
              >
                {props.isSubmitting ? 'Loading' : 'Sign up'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}

export default Signup
