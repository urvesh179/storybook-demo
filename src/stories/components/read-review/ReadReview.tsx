import React, { FC } from 'react'
import { Rate as AntRate } from 'antd'
import './ReadReview.module.less'
import { Avatar } from '../avatar/Avatar'

/* eslint-disable-next-line */
export interface ReadReviewProps {
  title?: string
  bodyContent?: string
  updatedAt?: string
  avatarSrc?: string
  name?: string
  defaultRating?: number
  color?: string
}

export const ReadReview: FC<ReadReviewProps> = ({
  title,
  bodyContent,
  updatedAt,
  avatarSrc,
  name,
  defaultRating,
  color,
}) => {
  return (
    <div className={"readReviewCard"}>
      <div className={"readReviewBody"}>
        <h6>{title}</h6>
        <div className={"readReviewContent"}>
          <p>{bodyContent}</p>
        </div>
      </div>

      <div className={"readReviewFooter"}>
        <div className={"reviewUser"}>
          <Avatar size={44} src={avatarSrc} />
          <div className={"reviewName"}>
            <h5>{name}</h5>
            <AntRate
              className={"reviewRate"}
              allowHalf
              defaultValue={defaultRating}
              style={{ color: color || '#54B2D3' }}
            />
          </div>
        </div>
        <div className={"reviewDate"}>
          <span>{updatedAt}</span>
        </div>
      </div>
    </div>
  )
}

export default ReadReview
