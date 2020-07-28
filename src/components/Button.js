import React from 'react'
import styled from 'styled-components'

export default function Button({ icon, size, onClick, altText }) {
  return (
    <StyledButton width={size} onClick={onClick}>
      <img width={size} src={icon} alt={altText || ''} />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: none;
  height: auto;
  width: ${(props) => props.width || '50px'};
  margin: auto;

  :active {
    transform: scale(0.95, 0.95);
  }

  img {
    width: ${(props) => props.width || '50px'};
  }
`
