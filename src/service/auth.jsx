import axiosInstance from './apibase'
import apiEndPoints from './endpoints'
const jwt = require('jsonwebtoken')

const { userLogin } = apiEndPoints.auth
export const loginUser = async (userData) => {
  try {
    const res = await axiosInstance.post(userLogin, userData)
    console.log(res)
    const token = res.accessToken

    const decodeToken = jwt.decode(token)
    console.log(decodeToken)

    const rolename = await decodeToken.payload.roleid.name
    console.log(rolename)

    if (res.status === 200) {
      if (rolename === 'Patient') {
        window.location.pathname = '/patient'
      } else {
        window.location.pathname = '/doctor'
      }
    }
    return res
  } catch (err) {
    return err
  }
}
