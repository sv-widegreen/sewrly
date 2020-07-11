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
      {projectList.length > 0 ? <ProjectList projectList={projectList} /> : ''}
    </>
  )

  function updateProjectList(projectData, event) {
    event.target.reset()
    setProjectList([...projectList, projectData])
  }
}
