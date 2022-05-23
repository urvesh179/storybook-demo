import React, { FC } from 'react'
import { Breadcrumb as AntBreadcrumb } from 'antd'
import  './Breadcrumb.module.less'

export interface BreadcrumbItemInterface {
  path: string
  breadcrumbName: string
  children?: Array<{
    path: string
    breadcrumbName: string
  }>
}
interface P {
  breadcrumbItems: BreadcrumbItemInterface[]
}

export const Breadcrumb: FC<P> = ({ breadcrumbItems }) => {
  const itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <a href={'/' + route.path ?? ''}>{route.breadcrumbName}</a>
    )
  }

  return (
    <AntBreadcrumb
      separator=">"
      className="breadcrumb"
      itemRender={itemRender}
      routes={breadcrumbItems}
    />
  )
}

export default Breadcrumb
