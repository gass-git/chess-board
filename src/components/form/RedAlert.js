import React from 'react'
import { Alert } from 'react-bootstrap'

export default function RedAlert({ showAlert, setShowAlert }) {
  if (showAlert) {
    return (
      <Alert
        style={{ maxWidth: '600px', minWidth: '300px' }}
        variant="danger"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        <Alert.Heading>Oh snap! You got an error! Make sure you:</Alert.Heading>
        - Filled all the inputs before starting the game<br />
        - The board size is smaller or equal to 20<br />
        - The available steps is smaller or equal to 100<br />
      </Alert >
    )
  }
  else {
    return null
  }
}
