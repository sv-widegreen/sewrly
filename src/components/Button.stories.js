import React from 'react'
import addButtonShadowTop from '../assets/addButtonShadowTop.svg'
import addButtonStrong from '../assets/addButtonStrong.svg'
import backButton from '../assets/backButton.svg'
import editButton from '../assets/editButton.svg'
import saveButtonDiskTeal from '../assets/saveButtonDiskTeal.svg'
import checkButtonTeal from '../assets/checkButtonTeal.svg'
import homeButton from '../assets/homeButton.svg'
import projectsNavBar from '../assets/projectsNavBar.svg'
import shoppingCartNavBar from '../assets/shoppingCartNavBar.svg'

import Button from './Button'

export default {
  component: Button,
  title: 'Button',
}

export const AddButtonStrong = () => <Button icon={addButtonStrong} />

export const AddButtonStrongShadowTop = () => (
  <Button icon={addButtonShadowTop} />
)

export const BackButton = () => <Button icon={backButton} />

export const CheckButtonTeal = () => <Button icon={checkButtonTeal} />

export const EditButton = () => <Button icon={editButton} />

export const SaveDiskButtonTeal = () => <Button icon={saveButtonDiskTeal} />

export const HomeButton = () => <Button icon={homeButton} />

export const ProjectsNavBar = () => <Button icon={projectsNavBar} />

export const ShoppingCartNavBar = () => <Button icon={shoppingCartNavBar} />
