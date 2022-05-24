import React, { FC } from 'react'
import './Settings.module.less'
import { Select, Typography, Input, Row, Col } from 'antd'

const { Title } = Typography

export const Configuration: FC = () => {
  const options = [
    { value: '15 minutes' },
    { value: '30 minutes' },
    { value: '45 minutes' },
  ]
  return (
    <div className="calendarSettingsConfiguration">
      <div className="settingContent">
        <Title className="headerText">Configuration</Title>
        <span className="description">
          Configure your calendars start and end time, as well as <br /> setting
          how big your appointment time slots are.
        </span>
      </div>
      <div className="configurationControls">
        <Row>
          <Col md={12}>
            <Title level={4} className="titleTextStyle">
              Time slot size
            </Title>
            <Select
              className="timeSlotSelect"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['15 minutes']}
              options={options}
            />
            <Row className="timeInputSpace">
              <Col md={12} className="colRightSpace">
                <Title level={4} className="titleTextStyle">
                  Start time
                </Title>
                <Input placeholder="" defaultValue="13:45" />
              </Col>
              <Col md={12} className="colLeftSpace">
                <Title level={4} className="titleTextStyle">
                  End time
                </Title>
                <Input defaultValue="13:45" />
              </Col>
            </Row>
            <Row className="timeInputSpace">
              <Col md={24}>
                <Title level={4} className="titleTextStyle">
                  Auto lock
                </Title>
                <Select
                  className="timeSlotSelect"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['15 minutes']}
                  options={options}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Configuration
