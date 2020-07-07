import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters, addDecorator } from '@storybook/react'
import './storybook.css'
import GlobalStyles from '../src/components/GlobalStyles'

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

addParameters({
  backgrounds: [
    {
      name: 'copper gradient',
      value: 'linear-gradient(to bottom, #fdb66f, #e16044 29%, #8b2d38)',
    },
    { name: 'copper ultralight', value: '#FFFBF6', default: true },
    { name: 'copper light', value: '#FEB66F' },
    { name: 'copper medium', value: '#DE5E44' },
    { name: 'copper dark', value: '#8c2d38' },
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
