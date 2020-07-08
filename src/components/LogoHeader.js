import React from 'react'
import styled from 'styled-components'
import logoCopperUltralight from '../assets/logoCopperUltralight.svg'

export default function LogoHeader() {
  return (
    <StyledLogoHeader>
      <img src={logoCopperUltralight} alt="Sewing Planner" />
    </StyledLogoHeader>
  )
}
const StyledLogoHeader = styled.header`
  position: fixed;
  left: 34px;
  padding-top: 30px;
  text-align: center;
`
