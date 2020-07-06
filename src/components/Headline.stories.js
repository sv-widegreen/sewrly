import React from 'react'
import Headline from './Headline'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  title: 'Headline',
  component: Headline,
}

export const headlineCopper = () => (
  <Headline textColor={'var(--copper-ultralight)'} headlineText={'Projects'} />
)

export const headlineTeal = () => (
  <div style={{ background: 'var(--copper-ultralight)' }}>
    {' '}
    <Headline
      textColor={'var(--teal-medium)'}
      headlineText={'Add a new project'}
    />
  </div>
)
