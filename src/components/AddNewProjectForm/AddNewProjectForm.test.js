import { render, screen } from '@testing-library/react'
import React from 'react'
import AddNewProjectForm from './AddNewProjectForm'

describe('AddNewProjectForm', () => {
  it('renders AddNewProjectForm', () => {
    const renderedComponent = render(<AddNewProjectForm />)
    expect(renderedComponent).toBeTruthy()
  })

  it('should render the project name input', () => {
    render(<AddNewProjectForm />)
    expect(
      screen.getByRole('textbox', { name: 'Project name:' })
    ).toBeInTheDocument()
  })

  it('should render the next step input', () => {
    render(<AddNewProjectForm />)
    expect(
      screen.getByRole('textbox', { name: 'Next step:' })
    ).toBeInTheDocument()
  })

  it('should render the pattern input', () => {
    render(<AddNewProjectForm />)
    expect(
      screen.getByRole('textbox', { name: 'Pattern:' })
    ).toBeInTheDocument()
  })

  it('should render the size input', () => {
    render(<AddNewProjectForm />)
    expect(screen.getByRole('textbox', { name: 'Size:' })).toBeInTheDocument()
  })

  it('should render the Materials I need input', () => {
    render(<AddNewProjectForm />)
    expect(screen.getByLabelText('Materials I need:')).toBeInTheDocument()
  })

  it('should render the Materials I have input', () => {
    render(<AddNewProjectForm />)
    expect(screen.getByLabelText('Materials I have:')).toBeInTheDocument()
  })

  it('should render the picture upload', () => {
    render(<AddNewProjectForm />)
    expect(screen.getByLabelText('Choose a file')).toBeInTheDocument()
  })

  it('should render the save button', () => {
    render(<AddNewProjectForm />)
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })
})
