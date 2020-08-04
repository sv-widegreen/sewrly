import React from 'react'
import ProjectDetailsTab from './ProjectDetailsTab'
import { object, withKnobs } from '@storybook/addon-knobs/react'

export default {
  title: 'Project Details Tab',
  component: ProjectDetailsTab,
  decorators: [withKnobs],
}

const projectEntry = {
  projectName: 'Summer dress',
  pattern: 'Pinterest',
  size: '36',
  nextStep: 'cut fabric and lining, buy button, zipper and tape',
}

export const projectDetailsTab = () => (
  <ProjectDetailsTab projectList={[object('mock up entry', projectEntry)]} />
)
