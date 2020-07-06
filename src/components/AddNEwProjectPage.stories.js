import React from 'react'
import AddNewProjectPage from './AddNewProjectPage'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  title: 'AddNewProjectPage',
  component: AddNewProjectPage,
}

export const addNewProjectPage = () => <AddNewProjectPage />
