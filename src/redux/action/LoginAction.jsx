import { loginUser } from '../../service/auth'

export const userLoginApi = (values) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_LOGIN_REQUEST',
    })
    const res = await loginUser(values)
    console.log(res)
    if (res.status === 200) {
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: {
          data: values,
        },
      })
    } else {
      throw Error(res.message)
    }
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'USER_LOGIN_FAIL',
    })
  }
}
