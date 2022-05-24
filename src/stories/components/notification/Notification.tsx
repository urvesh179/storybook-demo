import React from 'react'
import { message } from 'antd'
import './Notification.module.less'
import Reconnect from './ReconnectNotification'
import {
  CheckCircleFilled,
  CloseCircleOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'

export enum NotificationType {
  info = 'info',
  success = 'success',
  error = 'error',
  warning = 'warning',
  loading = 'loading',
  connect = 'connect',
}

export const Notification = (
  notificationType: NotificationType,
  text: string,
  delay = 2
): void => {
  let notify:any
  const onClose = () => {
    notify()
  }

  const notifyIcon = () => {
    switch (notificationType) {
      case NotificationType.success: {
        return <CheckCircleFilled className={"notifyIcon"} />

        break
      }
      case NotificationType.error: {
        return <CloseCircleOutlined className={"notifyIcon"} />

        break
      }
      case NotificationType.info: {
        return <InfoCircleOutlined className={"notifyIcon"} />

        break
      }
      case NotificationType.warning: {
        return <ExclamationCircleOutlined className={"notifyIcon"} />

        break
      }
      // No default
    }
  }

  if (notificationType === NotificationType.connect) {
    message.open({
      type: 'success',
      content: <Reconnect message="" delay={delay} />,
      className: "notifyReconnect",
      duration: delay,
    })
  } else {
    notify = message.open({
      type: notificationType,
      content: (
        <div className={"notificationContent"}>
          <span className={"notifyText"}>{text}</span>
          <CloseOutlined className={"closeIcon"} onClick={onClose} />
        </div>
      ),
      icon: notifyIcon(),
      className: "notifyStyles",
      duration: delay,
    })
  }
}

export default Notification
