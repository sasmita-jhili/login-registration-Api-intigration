const initialState = {
  fullname: '',
  phone: '',
  email: '',
  password: '',
  gender: '',
  address: '',
  rolename: '',
}
export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_REGISTRATION_SUCCESS':
      console.log(action.payload.data)
      return {
        ...state,
        initialState: action.payload.data,
      }
    default:
      return state
  }
}
