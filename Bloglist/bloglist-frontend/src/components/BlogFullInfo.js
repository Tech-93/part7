import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import CommentForm from './CommentForm'
import { initialComments, comment, emptyComments } from '../reducers/commentReducer'





const BlogFullInfo = ( { blog, handleLikes, user, handleRemove, comments, initialComments } ) => {



  if ( blog === undefined) {
    return <div>Loading...</div>
  }

  if(comments.length === 0 && blog.comments.length !== 0) {
    initialComments(blog.id)
  }



  const showRemoveButton = () => {
    if(user.username === blog.user.username) {
      return(
        <Button onClick={() => handleRemove(blog.id) }> remove </Button>
      )}
  }



  const renderComment = () => {

    if(comments.length === 0 && blog.comments.length === 0) {
      return (
        <div> no comments </div>
      )
    }

    return comments.map(comment =>
      < Comment key={comment.id} comment = {comment} />)
  }



  const Comment = ( { comment } ) => {
    return (
      <div>
        <ul> <li key={comment.id} > {comment.content} </li> </ul>
      </div>
    )
  }



  return (
    <div>
      <h2> {blog.title} {blog.author}  </h2>
      <div> <a href={`${blog.url}`} > {blog.url} </a>  </div>
      <div> {blog.likes} likes <Button data-cy="like" onClick={() => handleLikes(blog.id)} > like </Button> </div>
      <div> added by {blog.user.name} </div>
      {showRemoveButton()}
      <CommentForm blog={blog}    />
      {renderComment()}



    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = {
  initialComments,
  comment,
  emptyComments
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogFullInfo)