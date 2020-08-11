import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import Modal from './Modal'
import navBarIconProjects from '../assets/navBarIconProjects.svg'
import addIcon from '../assets/addIcon.svg'

export default {
  title: 'Modal',
  component: Modal,
  decorators: [withKnobs],
}

export const modal = () => (
  <Modal
    header="Wonderful!"
    text="You have created a new project. Check it out or create another one."
    buttonLeftIcon={navBarIconProjects}
    buttonLeftText="Projects"
    buttonLeftPath="/projects"
    buttonRightIcon={addIcon}
    buttonRightText="Add"
    buttonRigthPath="/add-new-project"
  />
)
