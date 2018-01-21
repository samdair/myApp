
const initialState = {
  user: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED': {
      return {
      	...state,
        user:  [...state.user, ...action.payload.data.results]
      }
    }

    case 'ADD_USER_FULFILLED': {
    	return {
    		...state,
    		user: [...state.user, ...action.payload.data]
    	}
    }

    default: {
      return {
        ...state
      }
    }

  }
}

export default userReducer;

