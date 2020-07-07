import React from 'react'
import styled from 'styled-components'

export default function Button({ type, icon, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      <img src={icon} alt="" />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: none;
  height: 50px;
  width: 50px;
  position: relative;
  left: 50%;
  margin: 10px 0 10px -25px;
`
