import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FabricCalculatorDropdown from '../components/FabricCalculatorDropdown/FabricCalculatorDropdown'
import Headline from '../components/Headline/Headline'
import LogoHeader from '../components/LogoHeader/LogoHeader'
import NavigationBar from '../components/Navigation/NavigationBar'
import {
  getFromSessionStorage,
  saveToSessionStorage,
} from '../services/handleSessionStorage'

export default function FabricCalculatorTab() {
  const [fabricCalculation, setFabricCalculation] = useState('')

  useEffect(
    () =>
      setFabricCalculation(getFromSessionStorage('fabric calculation') || ''),
    []
  )

  useEffect(
    () => saveToSessionStorage('fabric calculation', fabricCalculation),
    [fabricCalculation]
  )

  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline
          headlineText={'Fabric Calculator'}
          textColor={'var(--teal-medium)'}
        />
        <p className="question">
          Wondering how much fabric you will need for your project?
        </p>
        <FabricCalculatorDropdown
          onChange={handleSelection}
          value={fabricCalculation}
        />
        {fabricCalculation && (
          <>
            <p className="fabricCalculation">{fabricCalculation}*</p>
            <p className="disclaimer">
              *Please always consider pattern repeat and fabric width (standard:
              150cm), you may need more than stated above.
            </p>
            <p className="disclaimer">Double length for sizes XL and above.</p>
          </>
        )}
      </StyledTab>
      <NavigationBar />
    </>
  )

  function handleSelection(event) {
    setFabricCalculation(event.target.value)
  }
}

const StyledTab = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  margin-top: -20px;
  padding: 0 30px 50px 30px;
  background: var(--copper-ultralight);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);

  p {
    color: var(--teal-medium);
    font-size: 16px;
    padding: 20px 0;
  }

  .question {
    color: var(--teal-ultralight);
  }

  .fabricCalculation {
    background: white;
    border-radius: 4px;
    padding: 10px;
  }

  .disclaimer {
    color: var(--teal-light);
    font-size: 14px;
    font-weight: 200;
    padding: 20px 0 0 0;
  }
`
