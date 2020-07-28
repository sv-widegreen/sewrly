import { fireEvent, render, screen, act } from '@testing-library/react'
import React from 'react'
import ProjectUpdateForm from './ProjectUpdateForm.js'

const projectData = {
  projectName: 'Project name entry',
  pattern: 'pattern entry',
  size: 'size entry',
  nextStep: 'nextStep entry',
  id: '1234',
  materials: 'materials entry',
}

describe('ProjectUpdateForm.test.js', () => {
  it('can change the project name value with change event', () => {
    render(<ProjectUpdateForm projectData={projectData} />)
    const nameInput = screen.getByDisplayValue('Project name entry')
    fireEvent.change(nameInput, { target: { value: 'is updated' } })
    expect(nameInput.value).toBe('is updated')
  })

  it('can change the pattern value with change event', () => {
    render(<ProjectUpdateForm projectData={projectData} />)
    const patternInput = screen.getByDisplayValue('pattern entry')
    fireEvent.change(patternInput, { target: { value: 'is updated' } })
    expect(patternInput.value).toBe('is updated')
  })

  it('can change the size value with change event', () => {
    render(<ProjectUpdateForm projectData={projectData} />)
    const sizeInput = screen.getByDisplayValue('size entry')
    fireEvent.change(sizeInput, { target: { value: 'is updated' } })
    expect(sizeInput.value).toBe('is updated')
  })

  it('can change the next step value with change event', () => {
    render(<ProjectUpdateForm projectData={projectData} />)
    const nextStepInput = screen.getByDisplayValue('nextStep entry')
    fireEvent.change(nextStepInput, { target: { value: 'is updated' } })
    expect(nextStepInput.value).toBe('is updated')
  })

  it('can change the material value with change event', () => {
    render(<ProjectUpdateForm projectData={projectData} />)
    const materialsInput = screen.getByDisplayValue('materials entry')
    fireEvent.change(materialsInput, { target: { value: 'is updated' } })
    expect(materialsInput.value).toBe('is updated')
  })

  it('does not submit if project name is missing', async () => {
    const promise = Promise.resolve()
    const handleSubmit = jest.fn(() => promise)
    render(
      <ProjectUpdateForm projectData={projectData} onSubmit={handleSubmit} />
    )
    const nameInput = screen.getByDisplayValue('Project name entry')
    fireEvent.change(nameInput, { target: { value: '' } })
    screen.getByRole('button').click()
    expect(handleSubmit).not.toHaveBeenCalled()
    await act(() => promise)
  })

  it('does not submit if nextStep is missing', async () => {
    const promise = Promise.resolve()
    const handleSubmit = jest.fn(() => promise)
    render(
      <ProjectUpdateForm projectData={projectData} onSubmit={handleSubmit} />
    )
    const nextStepInput = screen.getByDisplayValue('nextStep entry')
    act(() => {
      fireEvent.change(nextStepInput, { target: { value: '' } })
    })
    screen.getByRole('button').click()
    expect(handleSubmit).not.toHaveBeenCalled()
    await act(() => promise)
  })

  it('does not submit if pattern entry is too loooooooong', async () => {
    const promise = Promise.resolve()
    const handleSubmit = jest.fn(() => promise)
    render(
      <ProjectUpdateForm projectData={projectData} onSubmit={handleSubmit} />
    )
    const patternInput = screen.getByDisplayValue('pattern entry')
    act(() => {
      fireEvent.change(patternInput, {
        target: { value: 'lllllooooooooooonnnnnnnnnnggggg entry' },
      })
    })
    screen.getByRole('button').click()
    expect(handleSubmit).not.toHaveBeenCalled()
    await act(() => promise)
  })
})
