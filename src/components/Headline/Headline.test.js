import { render, screen } from '@testing-library/react'
import React from 'react'
import Headline from './Headline'

describe('Headline', () => {
  it('renders the headline text', () => {
    render(<Headline headlineText="New Headline" />)
    expect(screen.getByText('New Headline')).toBeInTheDocument()
  })
})
