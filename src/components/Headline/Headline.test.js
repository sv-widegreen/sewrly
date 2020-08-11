import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Headline from './Headline'

describe('Headline.test.js', () => {
  it('renders the headline text', () => {
    render(<Headline headlineText="New Headline" />)

    screen.getByText('New Headline')
    expect(screen.getByText('New Headline')).toBeInTheDocument()
  })
})
