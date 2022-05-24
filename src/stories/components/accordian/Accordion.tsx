import React, { FC, useState } from 'react'
import { Collapse } from 'antd'
import { Button } from '../Button/Button'
import  './Accordion.module.less'
import DownArrowIcon from './DownArrow.svg'
import UpArrowIcon from './UpArrow.svg'
import FolderIcon from './FolderIcon.svg'
import OpenFolderIcon from './OpenFolder.svg'

const { Panel } = Collapse

/* eslint-disable-next-line */
export interface AccordionProps {
  headerLabel: string
}

export const Accordion: FC<AccordionProps> = ({ headerLabel, ...rest }) => {
  const [accordionState, setAccordionState] = useState(false)

  const customArrow = () => {
    return (
      <div>
        <Button
          type="default"
          size="large"
          shape="circle"
          className={"arrowIcon"}
        >
          <img
            src={accordionState ? UpArrowIcon : DownArrowIcon}
            alt="CaretDown"
            width="100%"
          />
        </Button>
      </div>
    )
  }

  return (
    <div className={"mainCollapseDiv"}>
      <Collapse
        defaultActiveKey={[]}
        onChange={() => {
          setAccordionState((accordionState) => !accordionState)
        }}
        expandIcon={customArrow}
        ghost={true}
      >
        <Panel
          header={
            <div className={"header"}>
              <div className={"folderIcon"}>
                <img
                  src={accordionState ? OpenFolderIcon : FolderIcon}
                  alt="Folder"
                />
              </div>
              <div className={"headerText"}>{headerLabel}</div>
            </div>
          }
          key="true"
        >
          <div className={"panel"}>{rest.children}</div>
        </Panel>
      </Collapse>
    </div>
  )
}

export default Accordion
