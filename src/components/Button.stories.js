import React from 'react'
import addButton from '../assets/addButton.svg'
import addButtonShadowTop from '../assets/addButtonShadowTop.svg'
import addButtonStrong from '../assets/addButtonStrong.svg'
import backButton from '../assets/backButton.svg'
import editButton from '../assets/editButton.svg'
import editPen from '../assets/editPen.svg'
import saveButtonClosed from '../assets/saveButtonClosed.svg'
import saveButtonDiskTeal from '../assets/saveButtonDiskTeal.svg'
import checkButtonTeal from '../assets/checkButtonTeal.svg'
import startButton from '../assets/startButton.svg'

import Button from './Button'

export default {
  component: Button,
  title: 'Button',
}

export const AddButton = () => <Button icon={addButton} />

export const AddButtonStrong = () => <Button icon={addButtonStrong} />

export const AddButtonStrongShadowTop = () => (
  <Button icon={addButtonShadowTop} />
)

export const BackButton = () => <Button icon={backButton} />

export const CheckButtonTeal = () => <Button icon={checkButtonTeal} />

export const EditButton = () => <Button icon={editButton} />

export const EditPen = () => <Button icon={editPen} />

export const SaveDiskButtonTeal = () => <Button icon={saveButtonDiskTeal} />

export const SaveLockButton = () => <Button icon={saveButtonClosed} />

export const StartButton = () => <Button icon={startButton} size="114px" />
