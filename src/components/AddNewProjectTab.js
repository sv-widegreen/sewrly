import React from 'react'
import styled from 'styled-components'
import AddNewProjectForm from './AddNewProjectForm'
import Headline from './Headline'

export default function AddNewProjectTab({ onSubmit }) {
  return (
    <StyledTab>
      <Headline
        headlineText={'Add a new project'}
        textColor={'var(--teal-medium)'}
      />
      <AddNewProjectForm updateProjectList={onSubmit} />
    </StyledTab>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: -18px;
  background: var(--copper-ultralight);
  width: 375px;
  height: 556px;
  border-radius: 20px 20px 0 0;
`
