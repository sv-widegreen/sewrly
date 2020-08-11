import React from 'react'
import NavigationBar from './NavigationBar'
import StoryRouter from 'storybook-react-router'
import { addDecorator } from '@storybook/react'

addDecorator(StoryRouter())

export default {
  component: NavigationBar,
  title: 'Navigation Bar',
}

export const navigationBar = () => <NavigationBar />
