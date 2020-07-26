import React, { useState, useEffect } from 'react'
import AddNewProjectTab from './components/AddNewProjectTab.js'
import LogoHeader from './components/LogoHeader.js'
import ProjectList from './components/ProjectList'
import { v4 as uuidv4 } from 'uuid'
import WelcomeScreen from './components/WelcomeScreen.js'
import initialProjectListState from './components/utils/initialProjectListState.json'

export default function App() {
  const [projectList, setProjectList] = useState(initialProjectListState)
  const [showProjectTab, setShowProjectTab] = useState(false)
  const [showAddNewProjectTab, setShowAddNewProjectTab] = useState(false)

  useEffect(() => {
    setProjectList(JSON.parse(localStorage.getItem('projects') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectList))
  }, [projectList])

  return (
    <>
      {!showAddNewProjectTab && !showProjectTab && (
        <WelcomeScreen startApp={() => setShowProjectTab(true)} />
      )}

      {showProjectTab && (
        <>
          {projectList.length > 0 ? (
            <>
              <LogoHeader />
              <ProjectList
                projectList={projectList}
                updateProjectData={updateProjectData}
                newProject={switchPageView}
              />
            </>
          ) : (
            setShowAddNewProjectTab(true)
          )}
        </>
      )}

      {showAddNewProjectTab && (
        <>
          <LogoHeader />
          <AddNewProjectTab
            onSubmit={addToProjectList}
            onBack={switchPageView}
          />
        </>
      )}
    </>
  )

  function switchPageView() {
    setShowAddNewProjectTab(!showAddNewProjectTab)
    setShowProjectTab(!showProjectTab)
  }

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
