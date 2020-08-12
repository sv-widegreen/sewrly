import React from 'react'
import { withKnobs, object } from '@storybook/addon-knobs'
import ProjectListItem from './ProjectListItem'

export default {
  title: 'Project List Item',
  component: ProjectListItem,
  decorators: [withKnobs],
}
const allEntries = {
  projectName: 'Summer dress with sleeves',
  pattern: 'Pinterest',
  size: '36',
  nextStep: 'cut fabric and lining, buy button, zipper and tape',
}
const noPattern = {
  projectName: 'New Jacket',
  size: '36',
  nextStep: 'decide on lining color',
}
const noSize = {
  projectName: 'Jeans',
  pattern: 'drafted myself',
  nextStep: 'redo everything',
}
const noPatternAndSize = {
  projectName: 'Sports Bag',
  nextStep: 'find pattern',
}

export const allData = () => (
  <ProjectListItem projectData={object('all entries', allEntries)} />
)
export const noPatternEntry = () => (
  <ProjectListItem projectData={object('no pattern entry', noPattern)} />
)
export const noSizeEntry = () => (
  <ProjectListItem projectData={object('no size entry', noSize)} />
)
export const noPatternAndSizeEntry = () => (
  <ProjectListItem
    projectData={object('no pattern and size entry', noPatternAndSize)}
  />
)
