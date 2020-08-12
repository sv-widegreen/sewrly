import React from 'react'
import { withKnobs, object } from '@storybook/addon-knobs'
import ProjectUpdateForm from './ProjectUpdateForm'

export default {
  title: 'Project Update Form',
  component: ProjectUpdateForm,
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
const noNothing = {}

export const projectUpdateFormAll = () => (
  <>
    <ProjectUpdateForm projectData={object('all entries', allEntries)} />
    <ProjectUpdateForm projectData={object('no pattern entry', noPattern)} />
    <ProjectUpdateForm projectData={object('no size entry', noSize)} />
    <ProjectUpdateForm
      projectData={object('no pattern and size entry', noPatternAndSize)}
    />
    <ProjectUpdateForm projectData={object('no nothing', noNothing)} />
  </>
)

export const allData = () => (
  <ProjectUpdateForm projectData={object('all entries', allEntries)} />
)
export const noPatternEntry = () => (
  <ProjectUpdateForm projectData={object('no pattern entry', noPattern)} />
)
export const noSizeEntry = () => (
  <ProjectUpdateForm projectData={object('no size entry', noSize)} />
)
export const noPatternAndSizeEntry = () => (
  <ProjectUpdateForm
    projectData={object('no pattern and size entry', noPatternAndSize)}
  />
)
export const noEntry = () => (
  <ProjectUpdateForm projectData={object('no nothing', noNothing)} />
)
