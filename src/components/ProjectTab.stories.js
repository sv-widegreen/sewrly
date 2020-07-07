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
const projectData = {
  name: 'Summer dress with sleeves',
  pattern: 'Pinterest',
  size: '36',
  nextStep: 'cut fabric and lining, buy button, zipper and tape',
}

export const projectTab = () => (
  <ProjectTab projectData={object('projectDataKnob', { ...projectData })} />
)

export const projectTabAndHeader = () => (
  <>
    <LogoHeader />
    <ProjectTab projectData={object('projectDataKnob', { ...projectData })} />
  </>
)
export const projectTabAndAddNewProjectTab = () => (
  <>
    <LogoHeader />
    <AddNewProjectTab />
    <ProjectTab projectData={object('projectDataKnob', { ...projectData })} />
  </>
)
