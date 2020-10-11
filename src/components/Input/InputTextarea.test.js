import { render, screen } from '@testing-library/react'
import React from 'react'
import InputTextarea from './InputTextarea'

describe('InputTextarea', () => {
  it('renders the component', () => {
    const renderedComponent = render(<InputTextarea />)
    expect(renderedComponent).toBeTruthy()
  })

  it('should display the label text', () => {
    render(<InputTextarea labelText="label" />)
    expect(screen.getByText('label')).toBeInTheDocument
  })

  it('should display the placeholder text', () => {
    render(<InputTextarea placeholderText="placeholderText" />)
    expect(screen.getByRole('textbox', { placeholder: 'placeholderText' }))
      .toBeInTheDocument
  })

  it('should display the error message when input is too long', () => {
    render(<InputTextarea error={{ type: 'max' }} errorMessageMax="max" />)
    expect(screen.getByText('max')).toBeInTheDocument
  })
})
