import { render, screen } from '@testing-library/react'
import React from 'react'
import InputField from './InputField'

describe('InputField', () => {
  it('renders the component', () => {
    const renderedComponent = render(<InputField />)
    expect(renderedComponent).toBeTruthy()
  })

  it('should display the label text', () => {
    render(<InputField labelText="label" />)
    expect(screen.getByText('label')).toBeInTheDocument
  })

  it('should display the placeholder text', () => {
    render(<InputField placeholderText="placeholderText" />)
    expect(screen.getByRole('textbox', { placeholder: 'placeholderText' }))
      .toBeInTheDocument
  })

  it('should display the error message when no input is provided', () => {
    render(
      <InputField
        error={{ type: 'required' }}
        errorMessageRequired="required"
      />
    )
    expect(screen.getByText('required')).toBeInTheDocument
  })
})
