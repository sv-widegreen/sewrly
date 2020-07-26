import React from 'react'
import addButton from '../assets/addButton.svg'
import addButtonShadowTop from '../assets/addButtonShadowTop.svg'
import backButton from '../assets/backButton.svg'
import NavigationBar from './NavigationBar'

export default {
  component: NavigationBar,
  title: 'Navigation Bar',
}

export const navigationBarAdd = () => (
  <NavigationBar icon={addButtonShadowTop} />
)

export const navigationBarBack = () => <NavigationBar icon={backButton} />
