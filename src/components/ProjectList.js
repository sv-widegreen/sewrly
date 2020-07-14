import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'
import ProjectListItem from './ProjectListItem'

export default function ProjectList({ projectList, onDelete }) {
  return (
    <StyledTab>
      <Headline
        headlineText={'Projects'}
        textColor={'var(--copper-ultralight)'}
      />
      <StyledProjectList>
        {projectList.map((projectData, index) => (
          <ProjectListItem
            key={projectData.projectName + index}
            projectData={projectData}
            onDelete={onDelete}
          />
        ))}
      </StyledProjectList>
    </StyledTab>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: -20px;
  background: var(--copper-gradient);
  min-height: 556px;
  border-radius: 20px 20px 0 0;
`

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`
