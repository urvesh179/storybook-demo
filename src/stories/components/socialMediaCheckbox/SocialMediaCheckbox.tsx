import React, { FC, ReactNode, useState } from 'react'
import { Checkbox, Popover } from 'antd'
import classNames from 'classnames'
import './SocialMediaCheckbox.module.less'

export interface MediaIcon {
  label: string
  link: string
  icon: ReactNode
}

interface P {
  mediaIcon?: MediaIcon[]
  onClick?: (activeLabel: string[]) => void
}

const content = (
  <div>
    <p>You have not setup a link for this particular social network</p>
  </div>
)
export const SocialMediaCheckbox: FC<P> = (props) => {
  const [activate, setActivate] = useState(true)
  const [activeLabel, setActiveLabel] = useState<string[]>([])

  const handleClick = (label) => {
    setActivate(!activate)
    const index = activeLabel.indexOf(label)
    index !== -1 ? activeLabel.splice(index, 1) : activeLabel.push(label)
    setActiveLabel(activeLabel)
    props.onClick?.(activeLabel)
  }

  return (
    <div className="socialMediaIcons">
      {props?.mediaIcon?.map((socialIcon) => (
        <span
          key={socialIcon.label}
          className={classNames(
            "socialBorder",
            socialIcon.link === null && "socialBorderRed",
            activeLabel.includes(socialIcon.label) && "iconColor"
          )}
          onClick={() => handleClick(socialIcon.label)}
        >
          {socialIcon.link === null ? (
            <Popover placement="bottomLeft" content={content} trigger="hover">
              {socialIcon.icon}
            </Popover>
          ) : (
            <div className="socialbox">
              <span>{socialIcon.icon}</span>
              <span className="socialName">{socialIcon.label}</span>
            </div>
          )}
          <Checkbox checked={activeLabel.includes(socialIcon.label)} />
        </span>
      ))}
    </div>
  )
}

export default SocialMediaCheckbox
