import React from 'react'
import styled from 'styled-components'
import AddNewProjectForm from './AddNewProjectForm'
import Headline from './Headline'
import LogoHeader from './LogoHeader'
import NavigationBar from './NavigationBar'

export default function AddNewProjectTab({ onSubmit }) {
  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline
          headlineText={'Add a new project'}
          textColor={'var(--teal-medium)'}
        />
        <AddNewProjectForm addToProjectList={onSubmit} />
      </StyledTab>
      <NavigationBar />
    </>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: -20px 0 0 0;
  background: var(--copper-ultralight);
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);
`
