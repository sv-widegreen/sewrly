import { array, object, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
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

const moreProjectEntries = [
  {
    projectName: 'Summer dress with sleeves',
    pattern: 'Pinterest',
    size: '36',
    nextStep: 'cut fabric and lining, buy button, zipper and tape',
  },
  {
    projectName: 'Summer dress with sleeves',
    pattern: 'Pinterest',
    size: '36',
    nextStep: 'cut fabric and lining, buy button, zipper and tape',
  },
  {
    projectName: 'New Jacket',
    size: '36',
    nextStep: 'decide on lining color',
  },
  {
    projectName: 'Jeans',
    pattern: 'drafted myself',
    nextStep: 'redo everything',
  },
  {
    projectName: 'Sports Bag',
    nextStep: 'find pattern',
  },
]

export const projectListAlone = () => (
  <ProjectList projectList={[object('mock up entry', projectEntry)]} />
)

export const projectListMoreEntries = () => (
  <ProjectList projectList={array('mock up entry', moreProjectEntries)} />
)
