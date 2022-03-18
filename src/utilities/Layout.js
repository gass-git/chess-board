import React from 'react'
import { Row, Container } from 'react-bootstrap'

export default function Game({ title, content }) {
  return (
    <Container className='mt-5'>
      <Row className='text-center'>
        <h2>
          {title}
        </h2>
      </Row>
      <Row className='mt-5 justify-content-md-center'>
        {content}
      </Row>
    </Container>
  )
}