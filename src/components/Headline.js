import React from 'react'
import styled from 'styled-components'

export default function Headline({ headlineText, textColor }) {
  return <StyledHeadline color={textColor}>{headlineText}</StyledHeadline>
}

const StyledHeadline = styled.header`
  font-family: var(--font-franklin);
  font-weight: 300;
  font-size: 24px;
  color: ${(props) => props.color || 'var(--teal-dark)'};
  text-align: center;
  padding-top: 18px;
`
