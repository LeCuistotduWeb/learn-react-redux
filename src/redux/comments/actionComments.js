import {LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR} from "./type";
import axios from "axios";

const loadApiComments = () => {
  return {
    type: LOAD_COMMENTS
  }
}

const loadCommentSuccess = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments,
  }
}

const loadCommentError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: error,
  }
}

export const apiCall = () => {
  return dispatch => {

    dispatch(loadApiComments())

    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        dispatch(loadCommentSuccess(response.data))
      })
      .catch(error => {
        dispatch(loadCommentError(error.message))
      });
  }
}

