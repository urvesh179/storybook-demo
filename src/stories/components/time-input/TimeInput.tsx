import React, { FC } from 'react'
import { TimePicker } from 'antd'
import { TimePickerProps } from 'antd/lib/time-picker'
import './TimeInput.module.less'

interface TimeInputProps extends TimePickerProps {
  label?: string
}

export const TimeInput: FC<TimeInputProps> = ({ label = '', ...props }) => {
  return (
    <div className="timeInputContainer">
      <p>{label}</p>
      <TimePicker {...props} format="HH:mm" placeholder="--:--" />
    </div>
  )
}

export default TimeInput
