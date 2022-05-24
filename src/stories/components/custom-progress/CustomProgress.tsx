import React, { FC } from 'react'

import { Progress } from 'antd'

import './CustomProgress.module.less'

/* eslint-disable-next-line */
export interface CustomProgressProps {
  percent: number
  rest: number
  labelPercent: string
  labelRest: string
  colorPercent: string
  colorRest: string
}

export const CustomProgress: FC<CustomProgressProps> = ({
  percent,
  rest,
  labelPercent,
  labelRest,
  colorPercent,
  colorRest,
}) => {
  percent = percent ?? 0
  rest = 100 - percent

  return (
    <>
      <div>
        <table className={"table"}>
          <thead>
            <tr>
              <th style={{ width: percent.toString() + '%' }}>{percent}%</th>
              <th>{rest}%</th>
            </tr>
          </thead>
        </table>
      </div>
      <Progress
        className={"progress"}
        percent={percent}
        strokeWidth={10}
        strokeColor={colorPercent}
        trailColor={colorRest}
        showInfo={false}
      />
      <div className={"title"}>
        <div className={"filled"}>
          <li>{labelPercent}</li>
        </div>
        <div className={"pending"}>
          <li>{labelRest}</li>
        </div>
      </div>
    </>
  )
}

export default CustomProgress
