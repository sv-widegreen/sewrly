import React from 'react'
import AddNewProjectTab from './AddNewProjectTab'
import LogoHeader from './LogoHeader'

export default {
  title: 'Add New Project Tab',
  component: AddNewProjectTab,
}

export const addNewProjectTabAlone = () => <AddNewProjectTab />

export const addNewProjectTabAndHeader = () => (
  <>
    <LogoHeader />
    <AddNewProjectTab />
  </>
)
