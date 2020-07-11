import React from 'react'
import styled from 'styled-components'

export default function Button({ icon }) {
  return (
    <StyledButton>
      <img src={icon} alt="" />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: none;
  height: 50px;
  width: 50px;
  margin: auto;
`
