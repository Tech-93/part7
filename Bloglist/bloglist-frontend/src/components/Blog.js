import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'



const Blog = ( { blog, emptyComments, setLimiter } ) => {



  const clickHandler = () => {
    emptyComments()
    setLimiter(true)
  }

  return (
    <Table.Row key={blog.id}>
      <Table.Cell>
        <Link onClick={clickHandler} to={`/blogs/${blog.id}`} > {blog.title} {blog.author} </Link>
      </Table.Cell>
    </Table.Row>

  )
}

export default Blog