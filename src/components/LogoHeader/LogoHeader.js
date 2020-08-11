import React from 'react'
import styled from 'styled-components'
import sewrlyTextLogoShadow from '../../assets/sewrlyTextLogoShadow.svg'

export default function LogoHeader() {
  return (
    <StyledLogoHeader>
      <img className="textlogo" src={sewrlyTextLogoShadow} alt="Sewrly" />
    </StyledLogoHeader>
  )
}
const StyledLogoHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--copper-gradient);
  padding-top: 10px;
  text-align: center;

  .textlogo {
    height: 100px;
  }
`
