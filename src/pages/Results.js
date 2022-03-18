import React from 'react'
import Moves from '../components/moves/main'
import { Row } from 'react-bootstrap'

export default function Results() {
  return (
    <>
      <Row className='text-center'>
        <h2>Thank you! Your steps:</h2>
      </Row>
      <Row className='mt-5 justify-content-md-center'>
        <Moves />
      </Row>
    </>
  )
}
