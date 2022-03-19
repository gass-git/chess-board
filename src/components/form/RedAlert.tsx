import React, { memo } from 'react'
import { Alert } from 'react-bootstrap'

function RedAlert({ showAlert, switchAlertOff }) {
  if (showAlert) {
    return (
      <Alert
        className='maxW-600px-minW-300px'
        variant='danger'
        onClose={() => switchAlertOff()}
        dismissible
      >
        <Alert.Heading>Oh snap! You got an error! Make sure:</Alert.Heading>
        - The inputs are filled before starting the game<br />
        - The board size is smaller or equal to 20<br />
        - The available steps is smaller or equal to 100<br />
      </Alert >
    )
  }
  else {
    return null
  }
}

export default memo(RedAlert)