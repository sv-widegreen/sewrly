import React from 'react'
import addButton from '../assets/addButton.svg'
import editButton from '../assets/editButton.svg'
import editPen from '../assets/editPen.svg'

import Button from './Button'

export default {
  component: Button,
  title: 'Button',
}

export const AddButton = () => <Button icon={addButton} />

export const EditButton = () => <Button icon={editButton} />

export const EditPen = () => <Button icon={editPen} />
