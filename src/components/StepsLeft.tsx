import React, { useContext } from 'react'
import { AppCtx } from '../App'

export default function StepsLeft() {
  const { state } = useContext(AppCtx)
  const { maxSteps, currentStep } = state

  return (
    <div>Steps left: {currentStep}/{maxSteps}</div>
  )
}
