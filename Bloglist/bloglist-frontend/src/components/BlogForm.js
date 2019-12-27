import React from 'react'
import  { useField } from '../hooks'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setMessage } from '../reducers/notificationReducer'
import { createBlog } from '../reducers/blogReducer'
import { reInitializeUsers } from '../reducers/allUsersReducer'





const BlogForm = (props) => {
  const newTitle = useField('text')
  const newAuthor = useField('text')
  const newUrl = useField('text')




  const addBlog = async (event) => {
    event.preventDefault()

    const blogObject = {
      title: newTitle.value,
      author: newAuthor.value,
      url: newUrl.value
    }

    props.createBlog(blogObject)

    newTitle.reset()
    newAuthor.reset()
    newUrl.reset()
    props.setMessage (
      'a new blog ' + newTitle.value + ' by ' + newAuthor.value + ' added'
    )

    setTimeout(() => {
      props.reInitializeUsers()
    }, 500)


  }


  return (
    <div>
      <Form onSubmit={addBlog}>
        <Form.Group>
          <Form.Label> title: </Form.Label>
          <Form.Control id="title" type="text" {...newTitle.omitreset} />
          <Form.Label> author: </Form.Label>
          <Form.Control id="author" type="text" {...newAuthor.omitreset} />
          <Form.Label> url: </Form.Label>
          <Form.Control id="url" type="text" {...newUrl.omitreset} />
          <Button data-cy="submit" type="submit"> create </Button>
        </Form.Group>

      </Form>
    </div>
  )
}

const mapDispatchToProps = {
  setMessage,
  createBlog,
  reInitializeUsers
}



export default connect(null, mapDispatchToProps)(BlogForm)

