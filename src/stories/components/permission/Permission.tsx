import React, { FC } from 'react'
import { Switch, Row, Col, Tooltip } from 'antd'
import { Button } from '../Button/Button'
import  './Permission.module.less'
import { QuestionCircleOutlined } from '@ant-design/icons'

export interface ContainerType {
  name: string
  value: boolean
  key: number
  tooltipMessage?: string
}
export interface PermissionFieldType {
  name: string
  description: string
  key: number
  container: ContainerType[]
}
export interface PermissionProps {
  title?: string
  description?: string
  fields?: PermissionFieldType[]
  onChange?: (index: number, ind: number, rowId?: string) => void
  onCheckAllClicked?: (rowId?: string) => void
  onUnCheckAllClicked?: (rowId?: string) => void
  rowId?: string
}
export const Permission: FC<PermissionProps> = ({
  title,
  description,
  fields,
  onChange,
  onCheckAllClicked,
  onUnCheckAllClicked,
  rowId,
}) => {
  return (
    <div className={"PermissiononWrap"}>
      <div className={"title"}>{title}</div>
      <div className={"desc"}>{description}</div>
      <Row>
        <Col span={24}>
          <div className={"CheckBtn"}>
            <Button type="link" onClick={() => onCheckAllClicked?.(rowId)}>
              CheckAll
            </Button>
            <Button type="link" onClick={() => onUnCheckAllClicked?.(rowId)}>
              UncheckAll
            </Button>
          </div>
        </Col>
      </Row>
      {fields?.map((field, index) => (
        <div className={"maintablbox"} key={field.key}>
          <div className={"fildename"}>
            <p>{field.name}</p>
            <div>{field.description}</div>
          </div>
          <div className={"manegercon"}>
            {field.container.map((data, ind) => (
              <div className={"swichContact"} key={data.key}>
                <div>
                  <div className={"dataname"}>
                    <p>{data.name}</p>
                    <Tooltip title={data.tooltipMessage}>
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </div>
                </div>
                <div>
                  <Switch
                    checked={data.value}
                    onClick={() => onChange?.(index, ind, rowId)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Permission
