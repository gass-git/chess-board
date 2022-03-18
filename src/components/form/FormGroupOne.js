import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export default function FormGroupOne({ boardSize, handleChange }) {
  return (
    <Form.Group as={Row} className='mb-3' constrolid='form-group-1'>
      <Col>
        <Form.Label>Chess board size (N x N)</Form.Label>
      </Col>
      <Col>
        <Form.Control type='number' name='boardSize' value={boardSize} onChange={handleChange} />
      </Col>
    </Form.Group>
  )
}
