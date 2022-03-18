import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export default function FormGroupTwo({ maxSteps, handleChange }) {
  return (
    <Form.Group as={Row} controlId='from-group-2'>
      <Col>
        <Form.Label>Number of available steps</Form.Label>
      </Col>
      <Col>
        <Form.Control type='number' name='maxSteps' value={maxSteps} onChange={handleChange} />
      </Col>
    </Form.Group>
  )
}
