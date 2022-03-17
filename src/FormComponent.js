import React, { useContext } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { AppCtx } from './App'

export default function FormComponent() {
  const navigateTo = useNavigate()
  const { state, dispatch } = useContext(AppCtx)
  const { boardSize, maxSteps } = state

  function handleSubmit() {
    dispatch({ type: 'build board data' })
    dispatch({ type: 'activate cell' })
    navigateTo('/chess-board')
  }

  function handleChange(event) {
    dispatch({
      type: 'update input data',
      propName: event.target.name,
      inputValue: event.target.value
    })
  }

  return (
    <>
      <Row className='mt-5'>
        <Form.Group
          as={Row}
          className='mb-3'
          constrolid='form-group-1'
        >

          <Col>
            <Form.Label>
              Chess board size (N x N)
            </Form.Label>
          </Col>

          <Col>
            <Form.Control
              type='number'
              name='boardSize'
              value={boardSize}
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
              value={maxSteps}
              onChange={handleChange}
            />
          </Col>

        </Form.Group>
      </Row >

      <Row className='mt-4 justify-content-md-center'>
        <Col className='text-center'>
          <Button onClick={handleSubmit}>
            Create Chess Board
          </Button>
        </Col>
      </Row>
    </>
  )
}
