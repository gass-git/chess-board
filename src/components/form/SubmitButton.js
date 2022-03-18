import React from 'react'
import { Button, Col } from 'react-bootstrap'

export default function SubmitButton({ handleSubmit }) {
  return (
    <Col className='text-center'>
      <Button onClick={handleSubmit}>Create Chess Board</Button>
    </Col>
  )
}
