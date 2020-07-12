import React, { useState, useEffect } from 'react'
import AddNewProjectTab from './components/AddNewProjectTab.js'
import LogoHeader from './components/LogoHeader.js'
import ProjectList from './components/ProjectList'
import HappyBirthday from './components/HappyBirthday.js'

export default function App() {
  const [projectList, setProjectList] = useState([])
  const [appVisible, setAppVisible] = useState(false)

  useEffect(() => {
    setProjectList(JSON.parse(localStorage.getItem('projects') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectList))
  }, [projectList])

  return (
    <>
      {appVisible ? (
        <>
          <LogoHeader />
          <AddNewProjectTab onSubmit={updateProjectList} />
          {projectList.length > 0 ? (
            <ProjectList projectList={projectList} />
          ) : (
            ''
          )}
        </>
      ) : (
        <HappyBirthday onClick={showApp} />
      )}
    </>
  )

  function updateProjectList(projectData, event) {
    event.target.reset()
    setProjectList([...projectList, projectData])
  }

  function showApp() {
    setAppVisible(!appVisible)
  }
}
