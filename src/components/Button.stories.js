import React from 'react'
import addButton from '../assets/addButton.svg'
import editButton from '../assets/editButton.svg'
import editPen from '../assets/editPen.svg'
import saveButtonClosed from '../assets/saveButtonClosed.svg'
import saveButtonDiskTeal from '../assets/saveButtonDiskTeal.svg'
import checkButtonTeal from '../assets/checkButtonTeal.svg'

import Button from './Button'

export default {
  component: Button,
  title: 'Button',
}

export const AddButton = () => <Button icon={addButton} />

export const EditButton = () => <Button icon={editButton} />

export const EditPen = () => <Button icon={editPen} />

export const SaveDiskButtonTeal = () => <Button icon={saveButtonDiskTeal} />

export const SaveLockButton = () => <Button icon={saveButtonClosed} />

export const CheckButtonTeal = () => <Button icon={checkButtonTeal} />
