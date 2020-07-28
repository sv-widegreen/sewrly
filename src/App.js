import React, { useState } from 'react'
import ProjectList from './components/ProjectList'
import WelcomeScreen from './components/WelcomeScreen.js'

export default function App() {
  const [showProjectTab, setShowProjectTab] = useState(false)

  return (
    <>
      {showProjectTab ? (
        <>
          <ProjectList />
        </>
      ) : (
        <WelcomeScreen startApp={() => setShowProjectTab(true)} />
      )}
    </>
  )
}
