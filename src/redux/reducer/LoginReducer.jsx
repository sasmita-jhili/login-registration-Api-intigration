const initialState = {
  data: [],
  loading: false,
}

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
        roleId: action.payload.roleId,
        loading: false,
      }
    case 'USER_LOGIN_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
