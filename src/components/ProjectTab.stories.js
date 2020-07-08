import React from 'react'
import ProjectTab from './ProjectTab'
import LogoHeader from './LogoHeader'
import AddNewProjectTab from './AddNewProjectTab'
import { withKnobs, object } from '@storybook/addon-knobs/react'

export default {
  title: 'Project Tab',
  component: ProjectTab,
  decorators: [withKnobs],
}
const projectList = {
  name: 'Summer dress with sleeves',
  pattern: 'Pinterest',
  size: '36',
  nextStep: 'cut fabric and lining, buy button, zipper and tape',
}

export const projectTab = () => (
  <ProjectTab projectList={[object('mock up entry', projectList)]} />
)

export const projectTabAndHeader = () => (
  <>
    <LogoHeader />
    <ProjectTab projectList={[object('mock up entry', projectList)]} />
  </>
)
export const projectTabAndAddNewProjectTab = () => (
  <>
    <LogoHeader />
    <AddNewProjectTab />
    <ProjectTab projectList={[object('mock up entry', projectList)]} />
  </>
)
