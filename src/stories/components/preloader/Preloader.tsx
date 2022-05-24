import React, { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import  './Preloader.module.less'

export interface PreloaderProps {
  isLoaderVisible?: boolean
}

export const Preloader: FC<PreloaderProps> = ({ isLoaderVisible }) => {
  return (
    <div>
      {isLoaderVisible && <LoadingOutlined className="loader" spin />}
    </div>
  )
}

export default Preloader
