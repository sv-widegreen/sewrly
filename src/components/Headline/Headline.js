import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

Headline.propTypes = {
  headlineText: PropTypes.string,
  textColor: PropTypes.string,
}

export default function Headline({ headlineText, textColor }) {
  return <StyledHeadline color={textColor}>{headlineText}</StyledHeadline>
}

const StyledHeadline = styled.header`
  font-family: var(--font-franklin);
  font-weight: 300;
  font-size: 24px;
  color: ${(props) => props.color || 'var(--teal-dark)'};
  padding-top: 18px;
`
