import React from 'react'
import Headline from './Headline'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Headline',
  component: Headline,
  decorators: [withKnobs],
}

export const headlineCopper = () => (
  <Headline
    textColor={'var(--copper-ultralight)'}
    headlineText={text('headline', 'Projects')}
  />
)

export const headlineTeal = () => (
  <Headline
    textColor={'var(--teal-medium)'}
    headlineText={text('headline', 'Add a new project')}
  />
)
