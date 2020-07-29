import React from 'react'
import NavigationWelcomescreen from './NavigationWelcomescreen'
import StoryRouter from 'storybook-react-router'
import { addDecorator } from '@storybook/react'

addDecorator(StoryRouter())

export default {
  component: NavigationWelcomescreen,
  title: 'Navigation Welcomescreen',
}

export const navigationWelcomescreen = () => <NavigationWelcomescreen />
