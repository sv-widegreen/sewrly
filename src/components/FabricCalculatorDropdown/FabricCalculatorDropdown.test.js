import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import FabricCalculatorDropdown from './FabricCalculatorDropdown'

describe('FabricCalculatorDropdown', () => {
  it('renders the component', () => {
    const renderedComponent = render(<FabricCalculatorDropdown />)
    expect(renderedComponent).toBeTruthy()
  })

  it('renders all options', () => {
    render(<FabricCalculatorDropdown />)
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(8)
  })

  it('calls onChange when option is selected', () => {
    const selectOption = jest.fn()
    render(<FabricCalculatorDropdown onChange={selectOption} />)
    fireEvent.change(
      screen.getByRole('combobox', { target: { name: 'Dresses' } })
    )
    expect(selectOption).toHaveBeenCalledTimes(1)
  })
})
