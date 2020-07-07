import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'
import AddNewProjectForm from './AddNewProjectForm'

export default function AddNewProjectTab() {
  return (
    <StyledTab>
      <Headline
        headlineText={'Add a new project'}
        textColor={'var(--teal-medium)'}
      />
      <AddNewProjectForm />
    </StyledTab>
  )
}

const StyledTab = styled.main`
  margin-top: -18px;
  background: var(--copper-ultralight);
  max-width: 667px;
  min-height: 556px;
  border-radius: 20px 20px 0 0;
`
