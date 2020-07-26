import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function NavigationBar({ icon, onClick }) {
  return (
    <StyledNavContainer>
      <Button icon={icon} onClick={onClick} />
    </StyledNavContainer>
  )
}

const StyledNavContainer = styled.div`
  border-radius: 20px 20px 0 0;
  /*teal medium shadow */
  box-shadow: 0 -2px 4px -1px rgba(32, 95, 89, 0.3);
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 5;
  background: linear-gradient(to bottom, var(--copper-ultralight) 50%, #e3ded8);

  > button {
    position: relative;
    left: 50%;
    margin-left: -25px;
    margin-top: -25px;
    margin-bottom: 10px;
  }
`
