import axios from 'axios'
const jwt = require('jsonwebtoken')

export const userLoginApi = (values, history, setLoading, setError) => async (
  dispatch,
) => {
  await setLoading(true)
  try {
    const response = await axios.post('http://localhost:3000/login', values)
    await setLoading(false)

    const token = response.data.accessToken

    const decodeToken = jwt.decode(token)
    console.log(decodeToken)

    const rolename = await decodeToken.payload.roleid.name
    console.log(rolename)

    if (response.status === 200) {
      console.log(response.data.message)
      console.log(token)
      if (rolename === 'Patient') {
        history.push('/patient')
      } else {
        history.push('/doctor')
      }
    } else if (response.status === 401) {
      // console.log(response.error)
    }
    dispatch({
      type: 'USER_LOGIN',
      payload: {
        data: values,
        roleId: rolename,
      },
    })
  } catch (error) {
    console.log('login failure', error)
    setLoading(false)
    setError('Invalid Details')
  }
}
