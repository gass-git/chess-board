import React from 'react'
import Form from '../components/form/main'
import { Row } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Row className='text-center'>
        <h2>Welcome! Setup your game!</h2>
      </Row>
      <Row className='mt-5 justify-content-md-center'>
        <Form />
      </Row>
    </>
  )
}
