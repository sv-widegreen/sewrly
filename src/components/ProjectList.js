import React from 'react'
import styled from 'styled-components'
import addButton from '../assets/addButton.svg'
import Button from './Button'
import Headline from './Headline'
import ProjectListItem from './ProjectListItem'

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
      <StyledAddContainer>
        <Button icon={addButton} onClick={newProject} />
      </StyledAddContainer>
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

const StyledAddContainer = styled.div`
  border-radius: 20px 20px 0 0;
  /* border-top: solid 2px var(--teal-light); */
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 5;
  background: var(--copper-ultralight);

  > button {
    position: relative;
    left: 50%;
    margin-left: -25px;
    margin-top: -25px;
    margin-bottom: 10px;
  }
`
