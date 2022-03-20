import React from 'react'
import { render, screen } from '@testing-library/react'
import StepsLeft from '../components/StepsLeft'
import TestRenderer from 'react-test-renderer'
import { AppCtx } from '../App'

describe('StepsLeft', () => {

  it('should render the correct data of steps left', () => {
    for (let i = 0; i < 50; i++) {
      const maxSteps = Math.round(Math.random() * 100)
      const currentStep = Math.round(Math.random() * 100)
      const element = new TestRenderer.create(
        <AppCtx.Provider value={{ state: { maxSteps: maxSteps, currentStep: currentStep } }}>
          <StepsLeft />
        </AppCtx.Provider>
      )
      expect(element.root.findByType('div').children)
        .toEqual(['Steps left: ', currentStep.toString(), '/', maxSteps.toString()])
    }
  })

})