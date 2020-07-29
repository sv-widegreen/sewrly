import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import addButtonShadowTop from '../assets/addButtonShadowTop.svg'
import AddNewProjectTab from './AddNewProjectTab.js'
import LogoHeader from './LogoHeader.js'
import Headline from './Headline'
import NavigationBar from './NavigationBar'
import ProjectListItem from './ProjectListItem'

export default function ProjectList() {
  const [projectList, setProjectList] = useState([])
  const [showAddNewProjectTab, setShowAddNewProjectTab] = useState(false)

  useEffect(() => {
    setProjectList(JSON.parse(localStorage.getItem('projects') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectList))
  }, [projectList])

  return (
    <>
      <LogoHeader />
      {showAddNewProjectTab ? (
        <AddNewProjectTab
          onSubmit={addToProjectList}
          onBack={() => setShowAddNewProjectTab(false)}
        />
      ) : (
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
          <NavigationBar
            icon={addButtonShadowTop}
            onClick={() => setShowAddNewProjectTab(true)}
          />
        </StyledTab>
      )}
    </>
  )

  function addToProjectList(projectData, event) {
    event.preventDefault()
    event.target.reset()
    event.target[0].focus()
    projectData.id = uuidv4()
    setProjectList([...projectList, projectData])
  }

  function updateProjectData(updatedData) {
    const projectIndex = projectList.findIndex(
      (project) => project.id === updatedData.id
    )
    let updatedProjectList = [...projectList]
    updatedProjectList[projectIndex] = updatedData
    setProjectList(updatedProjectList)
  }
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

  li:first-child {
    margin-bottom: 80px;
  }
`
