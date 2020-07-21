import React, { useState, useEffect } from 'react'
import AddNewProjectTab from './components/AddNewProjectTab.js'
import LogoHeader from './components/LogoHeader.js'
import ProjectList from './components/ProjectList'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    setProjectList(JSON.parse(localStorage.getItem('projects') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectList))
  }, [projectList])

  return (
    <>
      <LogoHeader />
      <AddNewProjectTab onSubmit={addToProjectList} />
      {projectList.length > 0 ? (
        <ProjectList
          projectList={projectList}
          updateProjectData={updateProjectData}
        />
      ) : (
        ''
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
