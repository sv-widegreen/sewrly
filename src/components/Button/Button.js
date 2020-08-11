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
      {text && (
        <p className="buttonText" fontSize={fontsize}>
          {text}
        </p>
      )}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: none;
  width: ${(props) => props.width || '40px'};
  text-align: center;

  :active {
    transform: scale(0.75, 0.75);
    opacity: 0.7;
  }

  img {
    width: ${(props) => props.width || '40px'};
  }

  .buttonText {
    font-size: ${(props) => props.fontSize || '10px'};
    color: var(--teal-medium);
  }
`
