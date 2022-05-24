import React, { FC } from 'react'
import './Settings.module.less'
import { Typography } from 'antd'
const { Title } = Typography

export const Appearance: FC = () => {
  return (
    <div className="calendarSettingsAppearance">
      <div className="settingContent">
        <Title className="headerText">Appearance</Title>
        <span className="description">
          Customize the look and feel of the appointment card such <br /> as
          changing the layout of both the tooltip and the <br /> appointment
          card itself.
        </span>
      </div>
      <div className="appearancesControls">
        {/* <div className={styles.generalBlock}>
          <Title className={styles.generalText} level={4}>
            General
          </Title>
          <br />
          <span className={styles.description}>Some description here.</span>
        </div> */}
      </div>
    </div>
  )
}

export default Appearance
