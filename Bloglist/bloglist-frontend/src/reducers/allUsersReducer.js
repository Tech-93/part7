import userService from '../services/users'

const allUsersReducer = (state = [], action) => {
  switch(action.type) {
  case 'INIT_USERS':
    return action.data

  case 'RE_INIT_USERS':
    return state = action.data

  // no default

  }




  return state
}

export const initialUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT_USERS',
      data: users
    })
  }
}

export const reInitializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'RE_INIT_USERS',
      data: users
    })
  }
}




export default allUsersReducer