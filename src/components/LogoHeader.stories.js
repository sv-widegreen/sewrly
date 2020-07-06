import React from 'react'
import LogoHeader from './LogoHeader'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  title: 'Logo Header',
  component: LogoHeader,
}

export const logoHeader = () => <LogoHeader />
