import React from 'react'
import {
  EyeOutlined,
  PauseCircleOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import { notification } from 'antd'
import Button from './Button'
import { Story } from '@storybook/react/types-6-0'

export default {
  component: Button,
  title: 'Basics/Button',
  args: { label: 'Pabau', disabled: false, type: '', size: 'medium' },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        selected: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
    type: {
      control: {
        type: 'select',
        selected: 'primary',
        options: [
          'default',
          'primary',
          'ghost',
          'dashed',
          'link',
          'text',
          'danger',
        ],
      },
    },
    color: {
      control: { type: 'color' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const ButtonStory = ({ ...args }) => <Button {...args}>{args.label}</Button>


export const defaultBtn:Story = ButtonStory.bind({})
defaultBtn.args = {
  type: 'default',
}

export const primary:Story = ButtonStory.bind({})
primary.args = {
  type: 'primary',
}
export const ghost:Story = ButtonStory.bind({})
ghost.args = {
  type: 'ghost',
}
export const dashed:Story = ButtonStory.bind({})
dashed.args = {
  type: 'dashed',
}
export const link:Story = ButtonStory.bind({})
link.args = {
  type: 'link',
}
export const text:Story = ButtonStory.bind({})
text.args = {
  type: 'text',
}
export const danger:Story = ButtonStory.bind({})
danger.args = {
  type: 'danger',
}

export const diabled:Story = ButtonStory.bind({})
diabled.args = {
  type: 'primary',
  disabled: true,
}

export const preview:Story = ButtonStory.bind({})
preview.args = {
  label: 'Preview',
  icon: <EyeOutlined />,
}

export const CustomButton:Story = ButtonStory.bind({})
CustomButton.args = {
  label: 'Hello World',
  size: 'large',
  color: '#000',
  backgroundColor: '#54B2D3',
}


