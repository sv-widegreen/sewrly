import React, { useState } from 'react'
import AddNewProjectTab from './components/AddNewProjectTab.js'
import LogoHeader from './components/LogoHeader.js'
import ProjectList from './components/ProjectList'

function App() {
  const [projectList, setProjectList] = useState([])
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

export default App
