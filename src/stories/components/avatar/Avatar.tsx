import { UserOutlined } from '@ant-design/icons'
import { Avatar as AntAvatar, Tooltip } from 'antd'
import { AvatarProps as NativeAvatarProps } from 'antd/lib/avatar/avatar'
import ClassNames from 'classnames'
import React, { FC, useEffect, useState } from 'react'
import stc from 'string-to-color'
import { ReactComponent as EditIcon } from '../../assets/edit_icon.svg'
import  './Avatar.module.less'

enum Status {
  default = 'default',
  active = 'active',
  inactive = 'inactive',
}
export interface AvatarProps extends NativeAvatarProps {
  isLoading?: boolean
  zIndex?: number
  marginLeft?: string
  name?: string
  src?: string
  active?: Status
  edit?: boolean
  isTooltip?: boolean
}

export const Avatar: FC<AvatarProps> = ({
  isLoading = false,
  zIndex = 1,
  marginLeft = '0',
  name = '',
  src = '',
  active = 'default',
  edit,
  isTooltip = true,
  ...props
}) => {
  const [load, setLoad] = useState(true)
  const [shortName, setShortName] = useState('')
  useEffect(() => {
    const img = new Image()
    img.addEventListener('load', () => {
      setLoad(true)
    })
    img.addEventListener('error', () => {
      setLoad(false)
    })
    img.src = src
    setShortName(
      name
        .toUpperCase()
        .split(' ')
        .map((item) => item.charAt(0))
        .join('')
    )
  }, [name, src])

  return (
    <div className="avatarContainer" style={{ zIndex, marginLeft }}>
      {isLoading ? (
        <div className="avatarLoading">
          <AntAvatar
            {...props}
            icon={<UserOutlined />}
            src={''}
            shape="circle"
          />
        </div>
      ) : (
        <Tooltip
          title={isTooltip ? name : ''}
          placement="bottom"
          overlayClassName="overlay"
        >
          <div className="avatarDisplay">
            {load && src?.length > 0 ? (
              <AntAvatar {...props} src={src} shape="circle" />
            ) : (
              <AntAvatar
                {...props}
                shape="circle"
                style={{ backgroundColor: stc(name) }}
              >
                {shortName}
              </AntAvatar>
            )}
            {edit ? (
              <div className="edit">
                <EditIcon />
              </div>
            ) : (
              active !== Status.default && (
                <div
                  className={
                    active === Status.active
                      ? "avatarStatus"
                      : ClassNames("avatarStatus", "avatarInactive")
                  }
                />
              )
            )}
          </div>
        </Tooltip>
      )}
    </div>
  )
}

export default Avatar
