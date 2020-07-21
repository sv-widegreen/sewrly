import React from 'react'
import styled from 'styled-components'

export default function Button({ icon, onClick, altText }) {
  return (
    <StyledButton onClick={onClick}>
      <img src={icon} alt={altText || ''} />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: none;
  height: 50px;
  width: 50px;
  margin: auto;
  :active {
    transform: scale(0.95, 0.95);
  }
`
