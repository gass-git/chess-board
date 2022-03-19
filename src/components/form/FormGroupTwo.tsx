import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export default function FormGroupTwo({ maxSteps, handleChange }) {
  return (
    <Form.Group as={Row} className='mt-4 mb-4' controlId='from-group-2'>
      <Col xs={6} md={5}>
        <Form.Label>Number of available steps</Form.Label>
      </Col>
      <Col xs={6} md={7}>
        <Form.Control type='number' name='maxSteps' value={maxSteps} onChange={handleChange} />
      </Col>
    </Form.Group>
  )
}
