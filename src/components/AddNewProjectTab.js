import React from 'react'
import styled from 'styled-components'
import backButton from '../assets/backButton.svg'
import AddNewProjectForm from './AddNewProjectForm'
import Button from './Button'
import Headline from './Headline'

export default function AddNewProjectTab({ onSubmit, onBack }) {
  return (
    <StyledTab>
      <Headline
        headlineText={'Add a new project'}
        textColor={'var(--teal-medium)'}
      />
      <AddNewProjectForm addToProjectList={onSubmit} />
      <StyledAddContainer>
        <Button icon={backButton} onClick={onBack} />
      </StyledAddContainer>
    </StyledTab>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: -20px;
  background: var(--copper-ultralight);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);
`
const StyledAddContainer = styled.div`
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, 0.3);
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 5;
  /* background: var(--copper-ultralight); */
  background: linear-gradient(to bottom, var(--copper-ultralight), #e3ded8);

  > button {
    position: relative;
    left: 50%;
    margin-left: -25px;
    margin-top: -25px;
    margin-bottom: 10px;
  }
`
