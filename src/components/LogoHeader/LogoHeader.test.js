import { render, screen } from '@testing-library/react'
import React from 'react'
import LogoHeader from './LogoHeader'

describe('LogoHeader', () => {
  it('renders the component', () => {
    const renderedComponent = render(<LogoHeader />)
    expect(renderedComponent).toBeTruthy()
  })

  it('renders the image', () => {
    render(<LogoHeader />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
