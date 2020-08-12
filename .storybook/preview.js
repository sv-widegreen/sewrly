import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import './storybook.css'
import GlobalStyles from '../src/components/GlobalStyles'

export const decorators = [
  (s) => (
    <>
      <GlobalStyles />
      {s()}
    </>
  ),
]

export const parameters = {
  backgrounds: {
    default: 'copper gradient',
    values: [
      {
        name: 'copper gradient',
        value: 'linear-gradient(to bottom, #fdb66f, #e16044 29%, #8b2d38)',
      },
      { name: 'copper ultralight', value: '#FFFBF6' },
      { name: 'copper light', value: '#FEB66F' },
      { name: 'copper medium', value: '#DE5E44' },
      { name: 'copper dark', value: '#8c2d38' },
    ],
  },

  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
