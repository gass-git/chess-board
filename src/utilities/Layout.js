import React from 'react'
import { Row, Container } from 'react-bootstrap'

export default function Layout({ title, element }) {
  return (
    <Container>
      <Row className='mt-5 text-center'>
        <h2>{title}</h2>
      </Row>
      <Row className='mt-5 justify-content-center'>
        {element}
      </Row>
    </Container>
  )
}