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
      <Button icon={backButton} onClick={onBack} />
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
`
