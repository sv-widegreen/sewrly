import React from 'react'
import styled from 'styled-components'

export default function Button({
  icon,
  size,
  onClick,
  altText,
  text,
  fontsize,
}) {
  return (
    <StyledButton width={size} onClick={onClick}>
      <img width={size} src={icon} alt={altText || ''} />
      <p className="buttonText" fontSize={fontsize}>
        {text}
      </p>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: none;
  height: auto;
  width: ${(props) => props.width || '40px'};
  margin: auto;
  text-align: center;

  :active {
    transform: scale(0.95, 0.95);
  }

  img {
    width: ${(props) => props.width || '40px'};
  }

  .buttonText {
    font-size: ${(props) => props.fontSize || '10px'};
  }
`
