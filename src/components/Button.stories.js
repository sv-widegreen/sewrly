import React from 'react'
import { action } from '@storybook/addon-actions'
import addButton from '../assets/addButton.svg'

import Button from './Button'

export default {
  component: Button,
  title: 'Button',
}

export const AddButton = () => <Button type={'submit'} icon={addButton} />

export const testButton = () => <Button onClick={action('clicked')} />
