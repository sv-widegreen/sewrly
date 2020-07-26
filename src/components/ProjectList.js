import React from 'react'
import styled from 'styled-components'
import addButtonShadowTop from '../assets/addButtonShadowTop.svg'
import Headline from './Headline'
import ProjectListItem from './ProjectListItem'
import NavigationBar from './NavigationBar'

export default function ProjectList({
  projectList,
  updateProjectData,
  newProject,
}) {
  return (
    <StyledTab>
      <Headline
        headlineText="Projects"
        textColor={'var(--copper-ultralight)'}
      />
      <StyledProjectList>
        {projectList.map((projectData) => (
          <ProjectListItem
            key={projectData.id}
            projectData={projectData}
            updateProjectData={updateProjectData}
          />
        ))}
      </StyledProjectList>
      <NavigationBar icon={addButtonShadowTop} onClick={newProject} />
    </StyledTab>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  background: var(--copper-gradient);
  min-height: 556px;
  height: 100%;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);
`

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  li:first-child {
    margin-bottom: 80px;
  }
`
