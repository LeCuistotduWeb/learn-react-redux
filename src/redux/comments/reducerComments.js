import {LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR} from "./type";

const initialStateComments = {
  comments: [],
  isLoading: false,
  error: '',
}

const reducerComments = (state = initialStateComments, action) => {
  switch (action.type) {
    case LOAD_COMMENTS: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case LOAD_COMMENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: '',
        comments: action.payload,
      }
    }
    case LOAD_COMMENTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        comments: [],
      }
    }
    default: return state
  }
}

export default reducerComments
