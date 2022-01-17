import axios from 'axios'
export const userLoginApi = async (values) => {
  try {
    const response = await axios.post('http://localhost:3000/login', values)

    if (response.status === 200) {
      console.log('login successfull', response)
    } else if (response.status === 401) {
      console.log(response.error)
    }
    return {
      type: 'USER_LOGIN',
      payload: response.data,
    }
  } catch (error) {
    console.log('login failure', error)
  }
}
