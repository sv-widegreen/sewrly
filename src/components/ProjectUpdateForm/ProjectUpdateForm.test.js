import { fireEvent, render, screen, act } from '@testing-library/react'
import React from 'react'
import ProjectUpdateForm from './ProjectUpdateForm.js'

describe('ProjectUpdateForm', () => {
  it('can change the project name value with change event', () => {
    render(
      <ProjectUpdateForm projectData={{ projectName: 'Project name entry' }} />
    )
    const nameInput = screen.getByDisplayValue('Project name entry')
    fireEvent.change(nameInput, { target: { value: 'is updated' } })
    expect(nameInput.value).toBe('is updated')
  })

  it('can change the pattern value with change event', () => {
    render(<ProjectUpdateForm projectData={{ pattern: 'pattern entry' }} />)
    const patternInput = screen.getByDisplayValue('pattern entry')
    fireEvent.change(patternInput, { target: { value: 'is updated' } })
    expect(patternInput.value).toBe('is updated')
  })

  it('can change the size value with change event', () => {
    render(<ProjectUpdateForm projectData={{ size: 'size entry' }} />)
    const sizeInput = screen.getByDisplayValue('size entry')
    fireEvent.change(sizeInput, { target: { value: 'is updated' } })
    expect(sizeInput.value).toBe('is updated')
  })

  it('can change the next step value with change event', () => {
    render(<ProjectUpdateForm projectData={{ nextStep: 'nextStep entry' }} />)
    const nextStepInput = screen.getByDisplayValue('nextStep entry')
    fireEvent.change(nextStepInput, { target: { value: 'is updated' } })
    expect(nextStepInput.value).toBe('is updated')
  })

  it('can change the material needs value with change event', () => {
    render(
      <ProjectUpdateForm
        projectData={{ materialNeeds: 'materialNeeds entry' }}
      />
    )
    const materialNeedsInput = screen.getByDisplayValue('materialNeeds entry')
    fireEvent.change(materialNeedsInput, { target: { value: 'is updated' } })
    expect(materialNeedsInput.value).toBe('is updated')
  })

  it('can change the materials existing value with change event', () => {
    render(
      <ProjectUpdateForm
        projectData={{ materialsExisting: 'materialsExisting entry' }}
      />
    )
    const materialsExistingInput = screen.getByDisplayValue(
      'materialsExisting entry'
    )
    fireEvent.change(materialsExistingInput, {
      target: { value: 'is updated' },
    })
    expect(materialsExistingInput.value).toBe('is updated')
  })

  it('does not submit if project name is missing', async () => {
    const promise = Promise.resolve()
    const handleSubmit = jest.fn(() => promise)
    render(
      <ProjectUpdateForm
        projectData={{ projectName: 'Project name entry' }}
        onSubmit={handleSubmit}
      />
    )
    const nameInput = screen.getByDisplayValue('Project name entry')
    fireEvent.change(nameInput, { target: { value: '' } })
    screen.getByRole('button').click()
    expect(handleSubmit).not.toHaveBeenCalled()
    await act(() => promise)
  })
})
