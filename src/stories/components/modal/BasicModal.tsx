import React, { PropsWithChildren } from 'react'
import { Modal } from 'antd'
import Button from '../Button/Button'
import { Checkbox  } from '../checkbox/Checkbox'
import { ButtonTypes } from '../Button/Button'
import './BasicModal.module.less'
import { ModalProps } from 'antd/lib/modal'
import classNames from 'classnames'
export interface BasicModalProps {
  onOk?: () => void
  onCancel?: () => void
  onDelete?: () => void
  visible?: boolean
  newButtonText?: string
  title?: React.ReactNode
  modalWidth?: number
  isValidate?: boolean
  footer?: boolean
  submitting?: boolean

  /**
   * Creates a special tickbox next to the OK button
   */
  onSpecialBooleanClick?: () => void

  /**
   * Creates a special tickbox next to the OK button
   */
  specialBooleanLabel?: string

  /**
   * Creates a special tickbox next to the OK button
   */
  specialBooleanValue?: boolean

  dangerButtonText?: string
  newButtonDisable?: boolean
  btnType?: ButtonTypes
}

export function BasicModal({
  onOk,
  onCancel,
  onDelete,
  visible,
  children,
  title,
  modalWidth,
  specialBooleanLabel,
  specialBooleanValue,
  onSpecialBooleanClick,
  newButtonText,
  newButtonDisable = false,
  dangerButtonText,
  isValidate = true,
  footer = true,
  wrapClassName,
  submitting = false,
  btnType = ButtonTypes.primary,
  ...props
}: PropsWithChildren<BasicModalProps & ModalProps>): JSX.Element {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => onOk?.()}
      onCancel={() => onCancel?.()}
      footer={null}
      cancelText={null}
      width={modalWidth}
      // destroyOnClose={true}
      // modalRender={(E) => E}

      {...props}
    >
      <div className="modalContent">{children}</div>
      {footer && (
        <div className="modalFooter">
          {specialBooleanLabel && onSpecialBooleanClick && (
            <Checkbox
              defaultChecked={specialBooleanValue}
              onClick={onSpecialBooleanClick}
            >
              {specialBooleanLabel}
            </Checkbox>
          )}
          {dangerButtonText && (
            <Button
              type="default"
      
              onClick={() => onDelete?.()}
            >
              {dangerButtonText}
            </Button>
          )}
          {newButtonText && (
            <Button
              type={btnType}
              className="btnStyle"
              disabled={newButtonDisable || !isValidate || submitting}
              onClick={() => {
                submitting = true
                onOk?.()
                submitting = false
              }}
            >
              {newButtonText}
            </Button>
          )}
        </div>
      )}
    </Modal>
  )
}

export default BasicModal
