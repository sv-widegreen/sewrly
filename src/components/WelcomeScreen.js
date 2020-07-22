import React from 'react'
import logoCopperUltralightShadow from '../assets/logoCopperUltralightShadow.svg'
import sewrlyTextLogoShadow from '../assets/sewrlyTextLogoShadow.svg'
import startButtonNoInnerShadow from '../assets/startButtonNoInnerShadow.svg'
import Button from './Button'
import styled from 'styled-components'

export default function WelcomeScreen() {
  return (
    <StyledWelcome>
      <img className="logo" src={logoCopperUltralightShadow} alt="" />
      <img className="textlogo" src={sewrlyTextLogoShadow} alt="Sewrly" />
      <Button icon={startButtonNoInnerShadow} altText="start" />
      <p>- your trusty sewing planner -</p>
    </StyledWelcome>
  )
}

const StyledWelcome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 200;
  color: var(--copper-ultralight);
  background: var(--copper-gradient);
  height: 100vh;

  .logo {
    margin-top: 68px;
    width: 127px;
    height: 127px;
  }
  .textlogo {
    margin-top: 28px;
    width: 300px;
    height: 173px;
  }
  button,
  button > img {
    margin: 18px 0 68px 0;
    width: 114px;
    height: 114px;
  }
`
