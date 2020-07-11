import React from 'react'
import ProjectList from './ProjectList'
import LogoHeader from './LogoHeader'
import AddNewProjectTab from './AddNewProjectTab'
import { withKnobs, object } from '@storybook/addon-knobs/react'
import AddNewProjectForm from './AddNewProjectForm'

export default {
  title: 'Project List',
  component: ProjectList,
  decorators: [withKnobs],
}
const projectEntry = {
  projectName: 'Summer dress with sleeves',
  pattern: 'Pinterest',
  size: '36',
  nextStep: 'cut fabric and lining, buy button, zipper and tape',
}

export const projectListAlone = () => (
  <ProjectList projectList={[object('mock up entry', projectEntry)]} />
)

export const projectListAndHeader = () => (
  <>
    <LogoHeader />
    <ProjectList projectList={[object('mock up entry', projectEntry)]} />
  </>
)
export const projectListAndAddNewProjectTab = () => (
  <>
    <LogoHeader />
    <AddNewProjectTab />
    <ProjectList projectList={[object('mock up entry', projectEntry)]} />
  </>
)
