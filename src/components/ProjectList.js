import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'
import LogoHeader from './LogoHeader'
import NavigationBar from './NavigationBar'
import ProjectListItem from './ProjectListItem'

export default function ProjectList({ projectList, updateProjectData }) {
  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline
          headlineText="Projects"
          textColor={'var(--copper-ultralight)'}
        />
        {projectList.length <= 0 && (
          <p className="noProjectsYet">
            Click the button below to add your first project!
          </p>
        )}
        <StyledProjectList>
          {projectList.map((projectData) => (
            <ProjectListItem
              key={projectData.id}
              projectData={projectData}
              updateProjectData={updateProjectData}
            />
          ))}
        </StyledProjectList>
      </StyledTab>
      <NavigationBar />
    </>
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

  .noProjectsYet {
    color: var(--copper-ultralight);
    width: 200px;
    text-align: center;
    padding-top: 200px;
  }
`

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  a:first-child {
    margin-bottom: 80px;
  }
`
