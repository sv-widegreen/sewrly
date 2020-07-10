import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'
import ProjectListItem from './ProjectListItem'

export default function ProjectList({ projectList }) {
  return (
    <StyledTab>
      <Headline
        headlineText={'Projects'}
        textColor={'var(--copper-ultralight)'}
      />
      <StyledProjectList>
        <ProjectListItem projectList={projectList} />
      </StyledProjectList>
    </StyledTab>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: -60px;
  background: var(--copper-gradient);
  width: 375px;
  height: 556px;
  border-radius: 20px 20px 0 0;
`

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`
