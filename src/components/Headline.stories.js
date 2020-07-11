import React from 'react'
import Headline from './Headline'

export default {
  title: 'Headline',
  component: Headline,
}

export const headlineCopper = () => (
  <Headline textColor={'var(--copper-ultralight)'} headlineText={'Projects'} />
)

export const headlineTeal = () => (
  <Headline
    textColor={'var(--teal-medium)'}
    headlineText={'Add a new project'}
  />
)
