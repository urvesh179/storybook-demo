import React, { FC, ReactNode } from 'react'
import { Popover, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

import  './DotButton.module.less'

interface IOption {
  key: number
  icon: ReactNode
  label: string
  onClick?(): void
}

interface P {
  menuList?: IOption[]
}

export const DotButton: FC<P> = ({ ...props }) => {
  const { menuList } = props

  const prepareContent = () => {
    return (
      <div className="dotWrapper">
        {menuList?.map(({ key, icon, label, onClick }) => (
          <div
            className="dotList"
            key={`three-dot-menu-content-${key}`}
            onClick={() => onClick?.()}
          >
            {icon}
            <p>{label}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      {menuList ? (
        <Popover content={prepareContent()} placement="leftTop" trigger="click">
          <Button
            className="btnCircle"
            shape="circle"
            icon={<MoreOutlined />}
          />
        </Popover>
      ) : (
        <Button
          className="btnCircle"
          shape="circle"
          icon={<MoreOutlined />}
        />
      )}
    </div>
  )
}

export default DotButton
