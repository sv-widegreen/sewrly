import React, { useState, useEffect } from 'react'
import AddNewProjectTab from './components/AddNewProjectTab.js'
import LogoHeader from './components/LogoHeader.js'
import ProjectList from './components/ProjectList'

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
      <AddNewProjectTab onSubmit={updateProjectList} />
      {projectList.length > 0 ? (
        <ProjectList projectList={projectList} onDelete={deleteProject} />
      ) : (
        ''
      )}
    </>
  )

  function updateProjectList(projectData, event) {
    event.target.reset()
    event.target[0].focus()
    console.log(projectData)
    setProjectList([...projectList, projectData])
  }

  function deleteProject(event) {
    console.log(event.target)
  }
}
