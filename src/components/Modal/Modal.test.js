import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import Modal from './Modal'

describe('Modal', () => {
  it('renders the component', () => {
    const history = createMemoryHistory()
    const renderedComponent = render(
      <Router history={history}>
        <Modal />
      </Router>
    )
    expect(renderedComponent).toBeTruthy()
  })

  it('renders the header text', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Modal header="header text" />
      </Router>
    )
    expect(screen.getByText('header text')).toBeInTheDocument()
  })

  it('renders the paragraph text', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Modal text="paragraph text" />
      </Router>
    )
    expect(screen.getByText('paragraph text')).toBeInTheDocument()
  })

  it('passes on link paths', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Modal buttonLeftPath="/path" buttonRightPath="/path" />
      </Router>
    )
    const linkPaths = screen.getAllByRole('link', { href: '/path' })
    expect(linkPaths).toHaveLength(2)
  })

  it('renders link icons', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Modal buttonLeftIcon="icon" buttonRightIcon="icon" />
      </Router>
    )
    const linkIcons = screen.getAllByRole('img', { src: 'icon' })
    expect(linkIcons).toHaveLength(2)
  })
})
