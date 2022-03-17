import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function FormComponent({ data, handleChange, buildBoardData, activateCell }) {
  const navigateTo = useNavigate()

  function handleClick() {
    buildBoardData()
    activateCell()
    navigateTo('/chess-board')
  }

  return (
    <>
      <Row className='mt-5'>
        <Form.Group as={Row} className='mb-3' constrolid='form-group-1'>

          <Col>
            <Form.Label>
              Chess board size (N x N)
            </Form.Label>
          </Col>

          <Col>
            <Form.Control
              type='number'
              name='boardSize'
              value={data.boardSize}
              onChange={handleChange}
            />
          </Col>

        </Form.Group>

        <Form.Group as={Row} controlId='from-group-2'>

          <Col>
            <Form.Label>
              Number of available steps
            </Form.Label>
          </Col>

          <Col>
            <Form.Control
              type='number'
              name='maxSteps'
              value={data.maxSteps}
              onChange={handleChange}
            />
          </Col>

        </Form.Group>
      </Row >

      <Row className='mt-4 justify-content-md-center'>
        <Col className='text-center'>
          <Button onClick={handleClick}>
            Create Chess Board
          </Button>
        </Col>
      </Row>
    </>
  )
}
