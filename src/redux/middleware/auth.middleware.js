import * as types from "../types"
import * as actions from "../actions"

const logoutFlow = ({api}) => ({dispatch}) => next => async (action) => {

  next(action)

  if (action.type === types.LOGOUT) {
      try {
        //api.auth.logout()
      } catch (error) {
        //dispatch(actions.loginFailure(error));
      }
  }
}

export default [
    logoutFlow
]