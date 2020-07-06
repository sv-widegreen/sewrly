import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'
import AddNewProjectForm from './AddNewProjectForm'

export default function AddNewProjectPage() {
  return (
    <StyledPage>
      <Headline
        headlineText={'Add a new project'}
        textColor={'var(--teal-medium)'}
      />
      <AddNewProjectForm />
    </StyledPage>
  )
}

const StyledPage = styled.main`
  margin-top: -18px;
  background: var(--copper-ultralight);
  max-width: 667px;
  min-height: 554px;
  border-radius: 20px 20px 0 0;
`
