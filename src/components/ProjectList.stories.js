import { object, withKnobs } from '@storybook/addon-knobs/react'
import React from 'react'
import AddNewProjectTab from './AddNewProjectTab'
import LogoHeader from './LogoHeader'
import ProjectList from './ProjectList'

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
