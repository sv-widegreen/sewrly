import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Button from './Button'

describe('Button', () => {
  it('renders the Button', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders the image and passes the icon prop as src', () => {
    render(<Button icon="source test" />)
    expect(screen.getByRole('img', { src: 'source test' })).toBeInTheDocument()
  })

  it('renders the button text', () => {
    render(<Button text="button text test" />)
    expect(screen.getByText('button text test')).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const clicked = jest.fn()
    render(<Button onClick={clicked} />)
    fireEvent.click(screen.getByRole('button'))
    expect(clicked).toHaveBeenCalledTimes(1)
  })
})
