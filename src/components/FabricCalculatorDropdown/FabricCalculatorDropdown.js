import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import garmentOptions from './garmentOptions'

FabricCalculatorDropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default function FabricCalculatorDropdown({ onChange, value }) {
  return (
    <StyledDropdown onChange={onChange} value={value}>
      {garmentOptions.map((garment) => (
        <option key={garment.label} value={garment.fabricNeeded}>
          {garment.label}
        </option>
      ))}
    </StyledDropdown>
  )
}

const StyledDropdown = styled.select`
  width: 220px;
  height: 30px;
  margin: 30px 0 40px 0;
  padding: 0 10px 0 10px;
  border-radius: 4px;
  color: var(--teal-medium);
  font-size: 16px;
  font-weight: 200;

  option {
    padding: 8px 0;
    color: var(--teal-medium);
    background-color: white;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1pt var(--teal-ultralight);
  }
`
