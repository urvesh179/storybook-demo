import React, { FC, useState, useRef } from 'react'
import { toSvg } from 'html-to-image'
import { Card, Image, Rate, Row, Col } from 'antd'
import { StarFilled } from '@ant-design/icons'
import  './ShareReview.module.less'
import { ReactComponent as Header } from '../../assets/Pabau.svg'
export interface ShareReviewProps {
  text?: string
  reviewScore?: number
  logo?: string | undefined
  companyName?: string
  date?: Date
}
export const getFacebookUrl = (picture: string): string =>
  'http://www.facebook.com/sharer.php?u=https://www.pabau.com&picture=' +
  picture
export const getUrl = async (
  ref: HTMLElement,
  imagePlaceholder: string | undefined
): Promise<string> => {
  return await toSvg(ref || new HTMLElement(), {
    imagePlaceholder,
  })
}
export const ShareReview: FC<ShareReviewProps> = (props: ShareReviewProps) => {
  const [url, setUrl] = useState('')
  const ref = useRef(null)
  return (
    <>
      <div ref={ref}>
        <Card className={url ? "cardStyleNone" : "cardStyleBlock"}>
          <div className="mainBox">
            <div className="m_20">
              <Row justify="end">
                <Header className="squareBox" />
              </Row>
              <Row>
                <span className="dateStyle">
                  {props.date?.getDate().toString().padStart(2, '0')}/
                  {props.date &&
                    (props.date.getMonth() + 1).toString().padStart(2, '0')}
                </span>
              </Row>
              <div className="topSpace">
                <Row>
                  <span className="textStyle">
                    {'"'}
                    {props.text}
                    {'"'}
                  </span>
                </Row>
              </div>
            </div>
            <Row align="bottom" className="absoluteRow">
              <Image
                onLoad={async () => {
                  try {
                    if (!ref.current || url) {
                      return
                    }
                    setUrl(
                      await getUrl(
                        ref.current || new HTMLElement(),
                        props?.logo
                      )
                    )
                  } catch (error) {
                    console.log(error)
                  }
                }}
                src={props.logo}
                className="logoSize"
              />
              <Col className="flexOne">
                <Row justify="space-between">
                  <Col className="colSpace">
                    <Rate
                      className="starWrap"
                      character={() => (
                        <StarFilled className="starColor" />
                      )}
                      value={props.reviewScore}
                    />
                  </Col>
                  <Col className="colSpace">
                    <div className="verifiedText">verified patient</div>
                  </Col>
                </Row>
                <Row>
                  <div className="companyName">{props.companyName}</div>
                </Row>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
      <Image src={url} />
      <a href={getFacebookUrl(url)}>Share</a>
    </>
  )
}

export default ShareReview
