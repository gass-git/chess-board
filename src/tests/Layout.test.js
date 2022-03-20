import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from '../reusables/Layout'

describe('Layout', () => {

  it('should render the same text passed into title prop', () => {
    render(<Layout title='Some random title' element={''} />)
    const titleElement = screen.getByRole('heading', { name: 'Some random title' })
    expect(titleElement).toBeInTheDocument
  })

})