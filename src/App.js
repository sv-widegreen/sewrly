import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddNewProjectTab from './pages/AddNewProject/AddNewProjectTab'
import ArchiveList from './pages/ArchiveList'
import FabricCalculatorTab from './pages/FabricCalculator/FabricCalculatorTab'
import ProjectDetailsTab from './pages/ProjectDetails/ProjectDetailsTab'
import ProjectList from './pages/ProjectList/ProjectList'
import ShoppingList from './pages/ShoppingList/ShoppingList'
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen.js'
import { useLocalStorageState } from './services/useLocalStorageState'

export default function App() {
  const [projectList, setProjectList] = useLocalStorageState('projects')

  return (
    <Switch>
      <Route exact path="/">
        <WelcomeScreen />
      </Route>
      <Route path="/archive">
        <ArchiveList projectList={projectList} />
      </Route>
      <Route exact path="/projects">
        <ProjectList projectList={projectList} />
      </Route>
      <Route path="/projects/:projectName/:id">
        <ProjectDetailsTab
          projectList={projectList}
          updateProjectData={updateProjectData}
        />
      </Route>
      <Route path="/add-new-project">
        <AddNewProjectTab onSubmit={addToProjectList} />
      </Route>
      <Route path="/fabric-calculator">
        <FabricCalculatorTab />
      </Route>
      <Route path="/shopping-list">
        <ShoppingList projectList={projectList} />
      </Route>
    </Switch>
  )

  function addToProjectList(project) {
    setProjectList([...projectList, project])
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
