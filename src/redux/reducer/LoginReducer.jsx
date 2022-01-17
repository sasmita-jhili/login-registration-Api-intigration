const initialState = {
    email: "",
    password: "",
  };
export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return {
                ...state,
                initialState : action.payload
            }
        default: return state
    }
}