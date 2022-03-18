import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export default function FormGroupOne({ boardSize, handleChange }) {
  return (
    <Form.Group as={Row} className='mt-5 mb-4' constrolid='form-group-1'>
      <Col xs={6} md={5}>
        <Form.Label>Chess board size (N x N)</Form.Label>
      </Col>
      <Col xs={6} md={7}>
        <Form.Control type='number' name='boardSize' value={boardSize} onChange={handleChange} />
      </Col>
    </Form.Group >
  )
}
