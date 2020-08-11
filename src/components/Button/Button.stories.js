import React from 'react'
import addIcon from '../../assets/addIcon.svg'
import editIcon from '../../assets/editIcon.svg'
import saveIcon from '../../assets/saveIcon.svg'
import Button from './Button'

export default {
  component: Button,
  title: 'Button',
}

export const AddIcon = () => <Button icon={addIcon} />

export const EditIcon = () => <Button icon={editIcon} />

export const SaveDiskIconTeal = () => <Button icon={saveIcon} />
