import React, { FC, useState } from 'react'
import { Button } from '../Button/Button'
import {
  MailOutlined,
  MessageOutlined,
  RightOutlined,
  CalendarOutlined,
  TeamOutlined,
  FileDoneOutlined,
} from '@ant-design/icons'
// import { ReactComponent as Consent } from '../../assets/images/form-type/consent-selected.svg'
import { ChooseModal, ChooseModalItem, ChooseModalProps } from './ChooseModal'

export default {
  title: 'Modals/ChooseModal',
  component: ChooseModal,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

const addOnStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid var(--border-color-base)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--grey-text-color)',
  fontSize: '16px',
}

const itemsWithAddon: ChooseModalItem[] = [
  {
    title: 'Title-1',
    icon: <Button />,
    addonIcon: (
      <div style={addOnStyle}>
        <RightOutlined />
      </div>
    ),
  },
  {
    title: 'Title-2',
    icon: <Button />,
    addonIcon: (
      <div style={addOnStyle}>
        <RightOutlined />
      </div>
    ),
  },
//   {
//     title: 'SMS',
//     icon: <Consent />,
//     addonIcon: (
//       <div style={addOnStyle}>
//         <RightOutlined />
//       </div>
//     ),
//   },
]

const defaultItems: ChooseModalItem[] = [
  {
    title: 'Title-1',
    description: 'description-1',
    icon: <CalendarOutlined />,
  },
  {
    title: 'Title-2',
    icon: <FileDoneOutlined />,
    description: 'description-2',
  },
  {
    title: 'Title-3',
    icon: <TeamOutlined />,
    description: 'description-3',
  },
]

const ChooseServiceStory: FC<ChooseModalProps> = ({ ...args }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
       Click Me
      </Button>
      <ChooseModal
        {...args}
        visible={visible}
        onClose={() => setVisible(false)}
        onSelected={(item: ChooseModalItem) => {
        //   Notification(
        //     NotificationType.info,
        //     `Seleted Service Type: ${item.title}`
        //   )
          setVisible(false)
        }}
      />
    </>
  )
}

export const Default = ChooseServiceStory.bind({})
Default.args = {
  title: 'Title',
  subTitle: 'Step 2 of 2',
  items: defaultItems,
}

export const WithAddOn = ChooseServiceStory.bind({})
WithAddOn.args = {
  title: 'Title',
  subTitle: 'Step 1 of 2',
  items: itemsWithAddon,
}
