import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { AppCtx } from '../../App'
import FormGroupOne from './FormGroupOne'
import FormGroupTwo from './FormGroupTwo'
import SubmitButton from './SubmitButton'

export default function FormComponent() {
  const navigateTo = useNavigate()
  const { state, dispatch } = useContext(AppCtx)
  const { boardSize, maxSteps } = state

  function handleSubmit() {
    dispatch({ type: 'build board data' })
    dispatch({ type: 'activate cell' })
    navigateTo('/game')
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
        <FormGroupOne handleChange={handleChange} boardSize={boardSize} />
      </Row >

      <Row>
        <FormGroupTwo handleChange={handleChange} maxSteps={maxSteps} />
      </Row>

      <Row className='mt-4 justify-content-md-center'>
        <SubmitButton handleSubmit={handleSubmit} />
      </Row>
    </>
  )
}
