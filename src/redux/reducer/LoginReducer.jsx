const initialState = {
  email: '',
  password: '',
}

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      console.log(action.payload.data)
      console.log(action.payload.roleId)
      return {
        ...state,
        initialState: action.payload.data,
        roleId: action.payload.roleId,
      }

    default:
      return state
  }
}
