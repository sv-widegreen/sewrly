import React from 'react'
import addButton from '../assets/addButton.svg'

import Button from './Button'

export default {
  component: Button,
  title: 'Button',
}

export const AddButton = () => <Button type={'submit'} icon={addButton} />
