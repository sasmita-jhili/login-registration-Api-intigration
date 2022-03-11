import axios from 'axios'

const userRegisterApi = (values) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/register', values)
    console.log(response)
    if (response.status === 200) {
      console.log(response.data.message)
    }
    dispatch({
      type: 'USER_REGISTRATION_SUCCESS',
      payload: {
        data: values,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
export default userRegisterApi
