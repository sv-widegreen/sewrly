import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'

export default function AddNewProjectPage() {
  return (
    <StyledPage>
      <Headline
        headlineText={'Add a new project'}
        textColor={'var(--teal-medium)'}
      />
    </StyledPage>
  )
}

const StyledPage = styled.main`
  margin-top: -18px;
  background: var(--copper-ultralight);
  width: 100vw;
  height: 100vh;
  border-radius: 20px 20px 0 0;
`
