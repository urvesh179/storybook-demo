import React, { FC } from 'react'
import { Button } from '../Button/Button'
import './NotificationBanner.module.less'
import { Row, Col } from 'antd'
import iconClose from '../../assets/icon_close.svg'

interface P {
  title?: string
  desc?: string
  imgPath?: string
  allowClose?: boolean
  setHide: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  showPaymentButton?: boolean
  showPaymentTitle?: string
  email?: string
  showEmail?: boolean
}

export const NotificationBanner: FC<P> = ({
  title,
  desc,
  imgPath,
  allowClose,
  email,
  setHide: [isHide, setHide],
  // selectLanguageHook: [string, React.Dispatch<React.SetStateAction<string>>]
  // childHook: [isHide, React.Dispatch<React.SetStateAction<[]>>]
  // const [isHide, setHide] = useState(false)
  showPaymentButton = true,
  showPaymentTitle = '',
  showEmail = false,
}) => {
  return (
    <div
      className={isHide ? "hideBlock" : "notificationBody"}
      style={{ backgroundImage: `url(${imgPath})`, backgroundSize: 'contain' }}
    >
      <Row className="rowPosition">
        <Col md={16} sm={12}>
          <p className="title1">{title}</p>
          <p className="title2">{desc}</p>
          {showEmail && <p className="linkEmail">{email}</p>}
          {showPaymentButton && (
            <Button
              className="btnPayment"
              // onClick={() => {}}
              size="middle"
              type="link"
            >
              {showPaymentTitle || 'Enable Payments'}
            </Button>
          )}
        </Col>
        {allowClose && (
          <img
            className="iconClose"
            src={iconClose}
            onClick={() => setHide(true)}
            alt=""
          />
        )}
      </Row>
    </div>
  )
}

export default NotificationBanner
