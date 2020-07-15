import React from 'react'
import { withKnobs, object } from '@storybook/addon-knobs/react'
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

export const projectListItem = () => (
  <>
    <ProjectListItem projectData={[object('all entries', allEntries)]} />
    <ProjectListItem projectData={[object('no pattern entry', noPattern)]} />
    <ProjectListItem projectData={[object('no size entry', noSize)]} />
    <ProjectListItem
      projectData={[object('no pattern and size entry', noPatternAndSize)]}
    />
  </>
)
