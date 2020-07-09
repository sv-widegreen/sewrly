import React from 'react'
import Headline from './Headline'
import { render, screen } from '@testing-library/react'

describe('Headline.test.js', () => {
  it('renders the headline text', () => {
    render(<Headline headlineText="New Headline" />)

    screen.getByText('New Headline')
    expect(screen.getByText('New Headline')).toBeInTheDocument()
  })
})
