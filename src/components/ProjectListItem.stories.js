import React from 'react'
import { withKnobs, object } from '@storybook/addon-knobs/react'
import ProjectListItem from './ProjectListItem'

export default {
  title: 'Project List Item',
  component: ProjectListItem,
  decorators: [withKnobs],
}
const allEntries = {
  name: 'Summer dress with sleeves',
  pattern: 'Pinterest',
  size: '36',
  nextStep: 'cut fabric and lining, buy button, zipper and tape',
}
const noPattern = {
  name: 'New Jacket',
  size: '36',
  nextStep: 'decide on lining color',
}
const noSize = {
  name: 'Jeans',
  pattern: 'drafted myself',
  nextStep: 'redo everything',
}
const noPatternAndSize = {
  name: 'Sports Bag',
  nextStep: 'find pattern',
}

export const projectListItem = () => (
  <>
    <ProjectListItem projectList={[object('all entries', allEntries)]} />
    <ProjectListItem projectList={[object('no pattern entry', noPattern)]} />
    <ProjectListItem projectList={[object('no size entry', noSize)]} />
    <ProjectListItem
      projectList={[object('no pattern and size entry', noPatternAndSize)]}
    />
  </>
)
