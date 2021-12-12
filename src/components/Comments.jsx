import React, {useEffect} from 'react';
import {apiCall} from "../redux/comments/actionComments";
import {useDispatch, useSelector} from "react-redux";

const Comments = () => {

  const apiData = useSelector((state)=>state.comments)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiCall())
  }, []);

  if(apiData.isLoading) return (
    <div>loading...</div>
  )

  if(apiData.error) return (
    <div>{apiData.error}</div>
  )

  return (
    <div className="comments-container">
      <h2>Comments:</h2>

      <ul className="comments-list">
        {apiData.comments.map((comment)=>(
          <li key={comment.id}>
            <div className="comment">
              <div className="name">{comment.name}</div>
              <div className="content">{comment.body}</div>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Comments
